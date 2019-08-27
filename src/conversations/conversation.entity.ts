import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Message } from '../messages/message.entity';

@Entity()
export class Conversation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500})
  name: string;

  @Column({ length: 1000})
  description: string;

  @ManyToOne(type => Message, message => message.conversation)
  messages: Message[];
}
