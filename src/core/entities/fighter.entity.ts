import { WeightClass } from '../../shared/enums/weight-class.enum';

export class Fighter {
  constructor(
    public readonly id: string,
    public firstName: string,
    public lastName: string,
    public weightClass: WeightClass,
    public birthDate: Date,
  ) {}
}
