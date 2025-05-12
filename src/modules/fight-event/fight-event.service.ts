import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEventInput } from './dto/create-event.input';
import { FightEventOrm } from 'src/infrastructure/typeorm/entities/fight-event.orm';

@Injectable()
export class FightEventService {
  constructor(
    @InjectRepository(FightEventOrm) private repo: Repository<FightEventOrm>,
  ) {}

  create(dto: CreateEventInput) {
    return this.repo.save(dto);
  }
  findAll() {
    return this.repo.find();
  }
  findOne(id: string) {
    return this.repo.findOneBy({ id });
  }
}
