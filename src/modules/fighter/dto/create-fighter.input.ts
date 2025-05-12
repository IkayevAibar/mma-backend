import { InputType, OmitType } from '@nestjs/graphql';
import { FighterType } from '../graphql/fighter.type';

@InputType()
export class CreateFighterInput extends OmitType(
  FighterType,
  ['id', 'wins', 'losses', 'draws'] as const,
  InputType,
) {}
