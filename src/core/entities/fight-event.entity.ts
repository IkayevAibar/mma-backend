export class FightEvent {
  constructor(
    public readonly id: string,
    public name: string,
    public location: string,
    public date: Date,
  ) {}
}
