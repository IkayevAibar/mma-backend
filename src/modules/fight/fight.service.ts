import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FightOrm } from 'src/infrastructure/typeorm/entities/fight.orm';
import { Repository } from 'typeorm';
import { CreateFightInput } from './dto/create-fight.input';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { RankingService } from '../ranking/ranking.service';
import { Parent } from '@nestjs/graphql';
import { FightEventType } from '../fight-event/graphql/fight-event.type';

@Injectable()
export class FightService {
  constructor(
    @InjectRepository(FightOrm) private repo: Repository<FightOrm>,
    private readonly rankingSvc: RankingService,
    private readonly emitter: EventEmitter2,
  ) {}

  async create(dto: CreateFightInput) {
    const fight = await this.repo.save(dto);
    // publish async event
    this.emitter.emit('fight.finished', fight.id);
    return fight;
  }

  async getFightsByEventId(@Parent() event: FightEventType) {
    return this.repo.find({
      where: { event: { id: event.id } },
      relations: ['fighterA', 'fighterB', 'winner'],
    });
  }
}
