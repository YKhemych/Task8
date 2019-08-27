import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { DatabaseModule } from '../core/database.module';
import { messageProviders } from './message.providers';
import { userProviders } from '../users/user.providers';
import { conversationProviders } from '../conversations/conversation.providers';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...messageProviders,
    ...userProviders,
    ...conversationProviders,
    MessagesService,
  ],
  controllers: [MessagesController],
})
export class MessagesModule {}
