import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FightOrm } from 'src/infrastructure/typeorm/entities/fight.orm';
import { FighterOrm } from 'src/infrastructure/typeorm/entities/fighter.orm';
import { RankingOrm } from 'src/infrastructure/typeorm/entities/ranking.orm';
import { FightResultType } from 'src/shared/enums/fight-result.enum';
import { WeightClass } from 'src/shared/enums/weight-class.enum';
import { Repository } from 'typeorm';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class RankingService {
  constructor(
    @InjectRepository(RankingOrm) private repo: Repository<RankingOrm>,
    @InjectRepository(FightOrm) private fightRepo: Repository<FightOrm>,
    @InjectRepository(FighterOrm) private fighterRepo: Repository<FighterOrm>,
  ) {}

  @OnEvent('fight.finished', { async: true })
  async recalc(fightId: string) {
    const fight = await this.fightRepo.findOne({
      where: { id: fightId },
      relations: ['fighterA', 'fighterB', 'winner'],
    });
    if (!fight) return;

    const fighters = [fight.fighterA, fight.fighterB];
    await Promise.all(
      fighters.map(async (f) => {
        const ranking = await this.repo.findOne({
          where: { fighter: { id: f.id } },
        });
        // simplistic points system
        const isWinner = fight.winner?.id === f.id;
        const isDraw = fight.winner === null;
        const addPoints = isDraw
          ? 1
          : isWinner
            ? fight.method === FightResultType.DECISION
              ? 3
              : 4
            : 0;

        if (ranking) {
          ranking.points += addPoints;
          ranking.wins += isWinner ? 1 : 0;
          ranking.losses += !isWinner && !isDraw ? 1 : 0;
          ranking.draws += isDraw ? 1 : 0;
          ranking.winPercentage =
            ranking.wins / (ranking.wins + ranking.losses + ranking.draws);
          ranking.lastFightDate = new Date();
          await this.repo.save(ranking);
        } else {
          await this.repo.save({
            fighter: f,
            weightClass: f.weightClass,
            points: addPoints,
            wins: isWinner ? 1 : 0,
            losses: !isWinner && !isDraw ? 1 : 0,
            draws: isDraw ? 1 : 0,
            winPercentage: isWinner ? 1 : 0,
            lastFightDate: new Date(),
          });
        }
      }),
    );
  }

  async getByWeight(weight: WeightClass) {
    return this.repo.find({
      where: { weightClass: weight },
      order: { points: 'DESC', winPercentage: 'DESC' },
      relations: ['fighter'],
    });
  }

  async getAll() {
    return this.repo.find({
      order: { weightClass: 'ASC', points: 'DESC', winPercentage: 'DESC' },
      relations: ['fighter'],
    });
  }
}
