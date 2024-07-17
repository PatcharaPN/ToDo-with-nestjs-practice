import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TodoDocument = HydratedDocument<Todos>;

@Schema()
export class Todos {
  @Prop()
  todosname: string;
  @Prop()
  todosdesc: string;
}

export const TodoSchemas = SchemaFactory.createForClass(Todos);
