import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('events')
export class FightEventOrm {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column() name: string;

  @Column() location: string;

  @Column({ type: 'date' }) date: Date;
}
