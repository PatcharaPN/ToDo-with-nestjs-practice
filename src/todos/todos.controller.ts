import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoDocument, Todos } from './schemas/todos.schemas';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.create(createTodoDto);
  }

  @Get()
  async findAll(): Promise<TodoDocument[]> {
    return this.todosService.findAll();
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTodoDto: Partial<CreateTodoDto>,
  ): Promise<Todos | null> {
    return this.todosService.update(id, updateTodoDto);
  }
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Todos> {
    return this.todosService.delete(id);
  }
}
