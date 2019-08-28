import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
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

  @ManyToOne(type => User, user => user.messages, {onDelete: 'CASCADE'})
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ nullable: false })
  userId: number;

  @ManyToOne(type => Conversation, conversation => conversation.messages, {onDelete: 'CASCADE'})
  @JoinColumn({ name: 'conversationId' })
  conversation: Conversation;

  @Column({ nullable: false })
  conversationId: number;
}
