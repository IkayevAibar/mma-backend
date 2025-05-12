import { WeightClass } from 'src/shared/enums/weight-class.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('fights')
export class FightOrm {
  @PrimaryGeneratedColumn('uuid') id!: string;

  @ManyToOne(() => EventOrm, { eager: true }) event!: EventOrm;

  @ManyToOne(() => FighterOrm, { eager: true }) fighterA!: FighterOrm;
  @ManyToOne(() => FighterOrm, { eager: true }) fighterB!: FighterOrm;

  @ManyToOne(() => FighterOrm, { eager: true, nullable: true })
  winner?: FighterOrm | null;

  @Column({ type: 'enum', enum: FightResultType }) method!: FightResultType;
  @Column() round!: number;
  @Column() time!: string;
}
