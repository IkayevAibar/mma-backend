export enum WeightClass {
  FLYWEIGHT = 'Flyweight',
  BANTAMWEIGHT = 'Bantamweight',
  FEATHERWEIGHT = 'Featherweight',
}

export class Fighter {
  constructor(
    public readonly id: string,
    public firstName: string,
    public lastName: string,
    public weightClass: WeightClass,
    public birthDate: Date,
  ) {}
}
