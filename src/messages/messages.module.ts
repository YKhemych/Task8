import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { DatabaseModule } from '../core/database.module';
import { messageProviders } from './message.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...messageProviders, MessagesService],
  controllers: [MessagesController],
})
export class MessagesModule {}
