import { Connection, Repository } from 'typeorm';
import { Conversation } from './conversation.entity';

export const conversationProviders = [
  {
    provide: 'CONVERSATION_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Conversation),
    inject: ['DATABASE_CONNECTION'],
  },
];
