// todos.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoDocument, Todos } from './schemas/todos.schemas';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosService {
  constructor(
    @InjectModel(Todos.name) private toDosModel: Model<TodoDocument>,
  ) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todos> {
    const createdTodo = new this.toDosModel(createTodoDto);
    return createdTodo.save();
  }

  async findAll(): Promise<TodoDocument[]> {
    return this.toDosModel.find().exec();
  }
  async update(
    id: string,
    UpdateTodoDto: UpdateTodoDto,
  ): Promise<TodoDocument | null> {
    const updatedTodo = await this.toDosModel.findByIdAndUpdate(
      id,
      UpdateTodoDto,
      {
        new: true,
      },
    );
    return updatedTodo;
  }
  async delete(id: string): Promise<TodoDocument> {
    const deleteTodo = await this.toDosModel.findByIdAndDelete(id);
    return deleteTodo;
  }
}
