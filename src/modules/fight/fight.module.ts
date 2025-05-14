import { Module } from '@nestjs/common';
import { FightResolver } from './fight.resolver';
import { FightService } from './fight.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FightOrm } from 'src/infrastructure/typeorm/entities/fight.orm';
// import { EventEmitterModule } from '@nestjs/event-emitter';
import { FighterModule } from '../fighter/fighter.module';
import { FightEventModule } from '../fight-event/fight-event.module';
import { RankingModule } from '../ranking/ranking.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([FightOrm]),
    // EventEmitterModule.forFeature(),
    FighterModule,
    FightEventModule,
    RankingModule,
  ],
  providers: [FightResolver, FightService],
  exports: [FightService],
})
export class FightModule {}
