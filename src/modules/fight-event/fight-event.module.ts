import { Module } from '@nestjs/common';
import { FightEventService } from './fight-event.service';
import { FightEventResolver } from './fight-event.resolver';
import { FightEventOrm } from 'src/infrastructure/typeorm/entities/fight-event.orm';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([FightEventOrm])],
  providers: [FightEventService, FightEventResolver],
  exports: [FightEventService],
})
export class FightEventModule {}
