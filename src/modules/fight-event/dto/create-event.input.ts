import { InputType, OmitType } from '@nestjs/graphql';
import { FightEventType } from '../graphql/fight-event.type';

@InputType()
export class CreateEventInput extends OmitType(
  FightEventType,
  ['id'] as const,
  InputType,
) {}
