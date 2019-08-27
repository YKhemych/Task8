import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Conversation } from './conversation.entity';
import { IConversation } from './interfaces/conversation.interface';

@Injectable()
export class ConversationsService {
  constructor(
    @Inject('CONVERSATION_REPOSITORY')
    private readonly conversationRepository: Repository<Conversation>,
  ) {}

  async createUser(conversation: IConversation): Promise<IConversation> {
    const newConversation = new Conversation();
    newConversation.name = conversation.name;
    newConversation.description = conversation.description;
    return this.conversationRepository.save(newConversation);
  }

  async findAll(): Promise<IConversation[]> {
    return this.conversationRepository.find();
  }
  async updateUser(id: number, conversation: IConversation): Promise<IConversation> {
    await this.conversationRepository.update({ id }, conversation);
    return await this.conversationRepository.findOne(id);
  }
  async deleteUser(id: number): Promise<string> {
    const result = await this.conversationRepository.delete(id);
    return (result.affected === 1) ? 'Delete was successful' : 'Error in deleting';
  }
}
