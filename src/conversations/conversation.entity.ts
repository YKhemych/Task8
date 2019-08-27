import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany } from 'typeorm';
import { Message } from '../messages/message.entity';
import { User } from '../users/user.entity';

@Entity()
export class Conversation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500})
  name: string;

  @Column({ length: 1000})
  description: string;

  @OneToMany(type => Message, message => message.conversation)
  messages: Message[];

  @ManyToMany(type => User, user => user.conversations)
  users: User[];
}
