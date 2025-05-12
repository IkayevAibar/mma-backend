import { Field, InputType, Int } from '@nestjs/graphql';
import { FightResultType } from 'src/shared/enums/fight-result.enum';

@InputType()
export class CreateFightInput {
  @Field() eventId!: string;
  @Field() fighterAId!: string;
  @Field() fighterBId!: string;
  @Field(() => FightResultType) method!: FightResultType;
  @Field(() => Int) round!: number;
  @Field() time!: string;
}
