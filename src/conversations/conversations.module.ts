import { Module } from '@nestjs/common';
import { ConversationsService } from './conversations.service';
import { ConversationsController } from './conversations.controller';
import { DatabaseModule } from '../core/database.module';
import { conversationProviders } from './conversation.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...conversationProviders, ConversationsService],
  controllers: [ConversationsController],
})
export class ConversationsModule {}
