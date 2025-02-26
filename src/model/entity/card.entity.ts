import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('cards')
export class Card {
  @PrimaryGeneratedColumn({ name: 'card_id' })
  cardId: number;

  @CreateDateColumn({ name: 'created_at', nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', nullable: true })
  updatedAt: Date;

  @Column({ name: 'name', length: 255, nullable: true })
  name: string;

  @Column({ name: 'user_id', nullable: true })
  userId: number;

  @Column({ name: 'card_type', nullable: true })
  cardType: number;

  @Column({
    name: 'amount',
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: true,
  })
  amount: number;
}
