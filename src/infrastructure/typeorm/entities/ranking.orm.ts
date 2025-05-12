import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { WeightClass } from '../../../core/entities/fighter.entity';
import { FighterOrm } from './fighter.orm';

@Entity('rankings')
export class RankingOrm {
  @PrimaryGeneratedColumn('uuid') id: string;

  @ManyToOne(() => FighterOrm)
  fighter: FighterOrm;

  @Column({
    type: 'enum',
    enum: WeightClass,
  })
  weightClass: WeightClass;

  @Column() points: number;
  @Column() wins: number;
  @Column() losses: number;
  @Column() draws: number;
  @Column('float') winPercentage: number;
  @Column({ type: 'date' }) lastFightDate: Date;
}
