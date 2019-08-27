import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';
import { Conversation } from '../conversations/conversation.entity';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500})
  title: string;

  @Column({ length: 1000})
  text: string;

  @ManyToOne(type => User, user => user.messages)
  user: User;

  @ManyToOne(type => Conversation, conversation => conversation.messages)
  conversation: Conversation;
}
