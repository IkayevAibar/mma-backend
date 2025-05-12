import { Args, Query, Resolver } from '@nestjs/graphql';
import { WeightClass } from 'src/shared/enums/weight-class.enum';
import { RankingType } from './graphql/ranking.type';
import { RankingService } from './ranking.service';

@Resolver(() => RankingType)
export class RankingResolver {
  constructor(private svc: RankingService) {}

  @Query(() => [RankingType])
  rankings(@Args('weight', { nullable: true }) weight?: WeightClass) {
    return weight ? this.svc.getByWeight(weight) : this.svc.getAll();
  }
}
