import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ConversationDto } from './dto/conversation.dto';
import { IConversation } from './interfaces/conversation.interface';
import { ConversationsService } from './conversations.service';

@Controller('conversations')
export class ConversationsController {
  constructor(private readonly conversationsService: ConversationsService) {}

  @Post()
  createUser(@Body() conversationDto: ConversationDto): Promise<IConversation> {
    return this.conversationsService.createUser(conversationDto);
  }
  @Put(':id')
  updateUser(@Param('id') id, @Body() conversationDto: ConversationDto): Promise<IConversation> {
    return this.conversationsService.updateUser(id, conversationDto);
  }
  @Delete(':id')
  deleteUser(@Param('id') id): Promise<string> {
    return this.conversationsService.deleteUser(id);
  }
  @Get()
  findAll(): Promise<IConversation[]> {
    return this.conversationsService.findAll();
  }
}
