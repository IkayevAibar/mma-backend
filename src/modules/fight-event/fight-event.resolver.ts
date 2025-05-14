import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { FightEventType } from './graphql/fight-event.type';
import { FightEventService } from './fight-event.service';
import { CreateEventInput } from './dto/create-event.input';
import { FightType } from '../fight/graphql/fight.type';
import { InjectRepository } from '@nestjs/typeorm';
import { FightOrm } from 'src/infrastructure/typeorm/entities/fight.orm';
import { Repository } from 'typeorm';

@Resolver(() => FightEventType)
export class FightEventResolver {
  constructor(
    private service: FightEventService,
    @InjectRepository(FightOrm)
    private readonly fightRepo: Repository<FightOrm>,
  ) {}

  @Query(() => [FightEventType]) events() {
    return this.service.findAll();
  }
  @Query(() => FightEventType) event(@Args('id') id: string) {
    return this.service.findOne(id);
  }
  @Mutation(() => FightEventType) createEvent(
    @Args('input') input: CreateEventInput,
  ) {
    return this.service.create(input);
  }

  @ResolveField(() => [FightType])
  async fights(@Parent() event: FightEventType) {
    return await this.fightRepo.find({
      where: { event: { id: event.id } },
      relations: ['fighterA', 'fighterB', 'winner'],
    });
  }
}
