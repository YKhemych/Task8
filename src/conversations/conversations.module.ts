import { Module } from '@nestjs/common';
import { ConversationsService } from './conversations.service';
import { ConversationsController } from './conversations.controller';
import { DatabaseModule } from '../core/database.module';
import { userProviders } from '../users/user.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...userProviders, ConversationsService],
  controllers: [ConversationsController],
})
export class ConversationsModule {}
