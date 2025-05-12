import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FighterService } from './fighter.service';
import { FighterType } from './graphql/fighter.type';
import { CreateFighterInput } from './dto/create-fighter.input';

@Resolver(() => FighterType)
export class FighterResolver {
  constructor(private readonly fighterService: FighterService) {}

  @Query(() => [FighterType])
  fighters() {
    return this.fighterService.findAll();
  }

  @Mutation(() => FighterType)
  createFighter(@Args('input') input: CreateFighterInput) {
    return this.fighterService.create(input);
  }
}
