import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { userProviders } from './user.providers';
import { DatabaseModule } from '../core/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [...userProviders, UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
