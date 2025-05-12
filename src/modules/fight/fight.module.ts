import { Module } from '@nestjs/common';
import { FightResolver } from './fight.resolver';
import { FightService } from './fight.service';

@Module({
  providers: [FightResolver, FightService]
})
export class FightModule {}
