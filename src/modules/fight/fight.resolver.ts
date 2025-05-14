import {
  Args,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { FightType } from './graphql/fight.type';
import { FightService } from './fight.service';
import { CreateFightInput } from './dto/create-fight.input';
import { FightEventType } from '../fight-event/graphql/fight-event.type';

@Resolver(() => FightType)
export class FightResolver {
  constructor(private svc: FightService) {}
  @Mutation(() => FightType) createFight(@Args('input') i: CreateFightInput) {
    return this.svc.create(i);
  }

  @ResolveField(() => [FightType])
  async fights(@Parent() event: FightEventType) {
    return this.svc.getFightsByEventId(event);
  }
}
