import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessageDto } from './dto/message.dto';
import { IMessage } from './interfaces/message.interface';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post()
  createUser(@Body() messageDto: MessageDto): Promise<IMessage> {
    return this.messagesService.createUser(messageDto);
  }
  @Put(':id')
  updateUser(@Param('id') id, @Body() messageDto: MessageDto): Promise<IMessage> {
    return this.messagesService.updateUser(id, messageDto);
  }
  @Delete(':id')
  deleteUser(@Param('id') id): Promise<string> {
    return this.messagesService.deleteUser(id);
  }
  @Get()
  findAll(): Promise<IMessage[]> {
    return this.messagesService.findAll();
  }
}
