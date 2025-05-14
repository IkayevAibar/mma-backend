import { Module } from '@nestjs/common';
import { FightEventService } from './fight-event.service';
import { FightEventResolver } from './fight-event.resolver';
import { FightEventOrm } from 'src/infrastructure/typeorm/entities/fight-event.orm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FightOrm } from 'src/infrastructure/typeorm/entities/fight.orm';

@Module({
  imports: [
    TypeOrmModule.forFeature([FightEventOrm]),
    TypeOrmModule.forFeature([FightOrm]),
  ],
  providers: [FightEventService, FightEventResolver],
  exports: [FightEventService],
})
export class FightEventModule {}
