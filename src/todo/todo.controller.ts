import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dtos/create-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Post()
  async create(@Body(new ValidationPipe()) createTodo: CreateTodoDto) {
    return this.todoService.create(createTodo);
  }
}
