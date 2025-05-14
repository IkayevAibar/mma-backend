import { Module } from '@nestjs/common';
import { FighterService } from './fighter.service';
import { FighterResolver } from './fighter.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FighterOrm } from 'src/infrastructure/typeorm/entities/fighter.orm';

@Module({
  imports: [TypeOrmModule.forFeature([FighterOrm])],
  providers: [FighterService, FighterResolver],
  exports: [FighterService],
})
export class FighterModule {}
