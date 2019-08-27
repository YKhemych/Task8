import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Message } from '../messages/message.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500})
  username: string;

  @Column()
  password: string;

  @OneToMany(type => Message, message => message.user)
  messages: Message[];
}
