import { WeightClass } from 'src/core/entities/enums/weight-class.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
