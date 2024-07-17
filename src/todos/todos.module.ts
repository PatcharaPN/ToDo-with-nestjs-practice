import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Todos, TodoSchemas } from './schemas/todos.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Todos.name,
        schema: TodoSchemas,
      },
    ]),
  ],
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}
