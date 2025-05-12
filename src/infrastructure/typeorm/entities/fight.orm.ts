import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { FightEventOrm } from './fight-event.orm';
import { FighterOrm } from './fighter.orm';
import { FightResultType } from 'src/shared/enums/fight-result.enum';

@Entity('fights')
export class FightOrm {
  @PrimaryGeneratedColumn('uuid') id: string;

  @ManyToOne(() => FightEventOrm, { eager: true })
  event!: FightEventOrm;

  @ManyToOne(() => FighterOrm, { eager: true })
  fighterA!: FighterOrm;

  @ManyToOne(() => FighterOrm, { eager: true })
  fighterB!: FighterOrm;

  @ManyToOne(() => FighterOrm, { eager: true, nullable: true })
  winner!: FighterOrm | null;

  @Column({
    type: 'enum',
    enum: FightResultType,
  })
  method!: FightResultType;

  @Column() round!: number;

  @Column() time!: string;
}
