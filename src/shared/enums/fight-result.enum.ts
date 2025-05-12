import { registerEnumType } from '@nestjs/graphql';

export enum FightResultType {
  KO = 'KO',
  SUBMISSION = 'SUBMISSION',
  DECISION = 'DECISION',
}

registerEnumType(FightResultType, { name: 'FightResultType' });
