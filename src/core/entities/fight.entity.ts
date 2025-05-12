import { FightEvent } from './fight-event.entity';
import { Fighter } from './fighter.entity';

export enum FightResultType {
  KO = 'KO',
  Submission = 'Submission',
  Decision = 'Decision',
}

export class Fight {
  constructor(
    public readonly id: string,
    public readonly eventId: FightEvent,
    public readonly fighterA: Fighter,
    public readonly fighterB: Fighter,
    public winner: Fighter | null,
    public method: FightResultType,
    public round: number,
    public time: string,
  ) {}
}
