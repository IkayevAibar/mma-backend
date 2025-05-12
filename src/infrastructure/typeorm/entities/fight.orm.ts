import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { FightEventOrm } from './fight-event.orm';
import { FighterOrm } from './fighter.orm';
import { FightResultType } from '../../../core/entities/fight.entity';

@Entity('fights')
export class FightOrm {
  @PrimaryGeneratedColumn('uuid') id: string;

  @ManyToOne(() => FightEventOrm)
  event: FightEventOrm;

  @ManyToOne(() => FighterOrm)
  fighterA: FighterOrm;

  @ManyToOne(() => FighterOrm)
  fighterB: FighterOrm;

  @ManyToOne(() => FighterOrm, { nullable: true })
  winner: FighterOrm | null;

  @Column({
    type: 'enum',
    enum: FightResultType,
  })
  method: FightResultType;

  @Column() round: number;

  @Column() time: string;
}
