import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { WeightClass } from 'src/shared/enums/weight-class.enum';

@Entity('fighters')
export class FighterOrm {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column() firstName!: string;
  @Column() lastName!: string;

  @Column({ nullable: true }) nickname?: string;

  @Column({ type: 'date' }) birthDate!: Date;
  @Column() country!: string;

  @Column({ type: 'enum', enum: WeightClass })
  weightClass!: WeightClass;

  @Column({ type: 'int', nullable: true }) heightCm?: number;
  @Column({ type: 'int', nullable: true }) reachCm?: number;
  @Column({ nullable: true }) gym?: string;
}
