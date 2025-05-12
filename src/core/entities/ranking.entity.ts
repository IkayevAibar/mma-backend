import { Fighter, WeightClass } from './fighter.entity';

export class Ranking {
  constructor(
    public readonly id: string,
    public readonly fighterId: Fighter,
    public weightClass: WeightClass,
    public points: number,
    public wins: number,
    public losses: number,
    public draws: number,
    public winPercentage: number,
    public lastFightDate: Date,
  ) {}
}
