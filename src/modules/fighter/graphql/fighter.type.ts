import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { WeightClass } from 'src/shared/enums/weight-class.enum';

@ObjectType('Fighter')
export class FighterType {
  /* ——— основные данные ——— */
  @Field(() => ID)
  id!: string;

  @Field()
  firstName!: string;

  @Field()
  lastName!: string;

  @Field({ nullable: true })
  nickname?: string;

  @Field(() => Date)
  birthDate!: Date;

  @Field()
  country!: string;

  @Field(() => WeightClass)
  weightClass!: WeightClass;

  @Field(() => Int, { nullable: true })
  heightCm?: number;

  @Field(() => Int, { nullable: true })
  reachCm?: number;

  @Field({ nullable: true })
  gym?: string;

  /* ——— статистика (заполняется из Ranking) ——— */
  @Field(() => Int, { defaultValue: 0 })
  wins!: number;

  @Field(() => Int, { defaultValue: 0 })
  losses!: number;

  @Field(() => Int, { defaultValue: 0 })
  draws!: number;
}
