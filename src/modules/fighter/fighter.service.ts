import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FighterOrm } from 'src/infrastructure/typeorm/entities/fighter.orm';
import { Repository } from 'typeorm';
import { CreateFighterInput } from './dto/create-fighter.input';

@Injectable()
export class FighterService {
  constructor(
    @InjectRepository(FighterOrm)
    private readonly repo: Repository<FighterOrm>,
  ) {}

  async create(dto: CreateFighterInput) {
    return this.repo.save(dto);
  }

  findAll() {
    return this.repo.find();
  }
}
