import { Module } from '@nestjs/common';
import { FighterService } from './fighter.service';
import { FighterResolver } from './fighter.resolver';

@Module({
  providers: [FighterService, FighterResolver],
})
export class FighterModule {}
