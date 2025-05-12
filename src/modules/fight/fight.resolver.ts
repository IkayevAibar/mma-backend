import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { FightType } from './graphql/fight.type';
import { FightService } from './fight.service';
import { CreateFightInput } from './dto/create-fight.input';

@Resolver(() => FightType)
export class FightResolver {
  constructor(private svc: FightService) {}
  @Mutation(() => FightType) createFight(@Args('input') i: CreateFightInput) {
    return this.svc.create(i);
  }
}
