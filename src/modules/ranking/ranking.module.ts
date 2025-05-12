import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FightOrm } from 'src/infrastructure/typeorm/entities/fight.orm';
import { FighterOrm } from 'src/infrastructure/typeorm/entities/fighter.orm';
import { RankingOrm } from 'src/infrastructure/typeorm/entities/ranking.orm';
import { RankingResolver } from './ranking.resolver';
import { RankingService } from './ranking.service';

@Module({
  imports: [TypeOrmModule.forFeature([RankingOrm, FightOrm, FighterOrm])],
  providers: [RankingService, RankingResolver],
  exports: [RankingService],
})
export class RankingModule {}
