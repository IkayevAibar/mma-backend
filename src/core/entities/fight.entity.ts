import { FightResultType } from 'src/shared/enums/fight-result.enum';
import { FightEvent } from './fight-event.entity';
import { Fighter } from './fighter.entity';

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
