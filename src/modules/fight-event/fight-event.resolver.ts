import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FightEventType } from './graphql/fight-event.type';
import { FightEventService } from './fight-event.service';
import { CreateEventInput } from './dto/create-event.input';

@Resolver(() => FightEventType)
export class FightEventResolver {
  constructor(private service: FightEventService) {}

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
}
