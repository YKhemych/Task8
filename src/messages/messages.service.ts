import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Message } from './message.entity';
import { IMessage } from './interfaces/message.interface';
import { User } from '../users/user.entity';
import { Conversation } from '../conversations/conversation.entity';

@Injectable()
export class MessagesService {
  constructor(
    @Inject('MESSAGE_REPOSITORY')
    private readonly messageRepository: Repository<Message>,
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>,
    @Inject('CONVERSATION_REPOSITORY')
    private readonly conversationRepository: Repository<Conversation>,
  ) {}

  async createUser(message: IMessage): Promise<IMessage> {
    const newMessage = new Message();
    newMessage.title = message.title;
    newMessage.text = message.text;
    newMessage.user = await this.userRepository.findOne(message.userId);
    newMessage.conversation = await this.conversationRepository.findOne(message.conversationId);
    return this.messageRepository.save(newMessage);
  }

  async findAll(): Promise<IMessage[]> {
    return this.messageRepository.find();
  }
  async updateUser(id: number, message: IMessage): Promise<IMessage> {
    await this.messageRepository.update({ id }, message);
    return await this.messageRepository.findOne(id);
  }
  async deleteUser(id: number): Promise<string> {
    const result = await this.messageRepository.delete(id);
    return (result.affected === 1) ? 'Delete was successful' : 'Error in deleting';
  }
}
