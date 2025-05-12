import { ObjectType, Field, ID } from '@nestjs/graphql';
import { FighterType } from 'src/modules/fighter/graphql/fighter.type';
import { WeightClass } from 'src/shared/enums/weight-class.enum';

@ObjectType('Ranking')
export class RankingType {
  @Field(() => ID) id!: string;
  @Field(() => FighterType) fighter!: FighterType;
  @Field(() => WeightClass) weightClass!: WeightClass;
  @Field() points!: number;
  @Field() wins!: number;
  @Field() losses!: number;
  @Field() draws!: number;
  @Field() winPercentage!: number;
  @Field(() => Date) lastFightDate!: Date;
}
