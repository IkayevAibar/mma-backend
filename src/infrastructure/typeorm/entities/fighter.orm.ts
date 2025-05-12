import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { WeightClass } from '../../../core/entities/fighter.entity';

@Entity('fighters')
export class FighterOrm {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column() firstName: string;
  @Column() lastName: string;

  @Column({
    type: 'enum',
    enum: WeightClass,
  })
  weightClass: WeightClass;

  @Column({ type: 'date' }) birthDate: Date;
}
