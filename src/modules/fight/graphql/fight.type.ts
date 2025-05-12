// src/modules/fight/graphql/fight.type.ts
import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { FighterType } from '../../fighter/graphql/fighter.type';
import { FightResultType } from '../../../shared/enums/fight-result.enum';
import { FightEventType } from 'src/modules/fight-event/graphql/fight-event.type';

@ObjectType('Fight')
export class FightType {
  @Field(() => ID) id!: string;
  @Field(() => FightEventType) event!: FightEventType;
  @Field(() => FighterType) fighterA!: FighterType;
  @Field(() => FighterType) fighterB!: FighterType;
  @Field(() => FighterType, { nullable: true }) winner?: FighterType | null;
  @Field(() => FightResultType) method!: FightResultType;
  @Field(() => Int) round!: number;
  @Field() time!: string;
}
