import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType('FightEvent')
export class FightEventType {
  @Field(() => ID) id!: string;
  @Field() name!: string;
  @Field() location!: string;
  @Field(() => Date) date!: Date;
}
