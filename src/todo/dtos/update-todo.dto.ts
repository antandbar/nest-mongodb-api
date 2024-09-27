import { IsNotEmpty, IsString, IsEnum, IsOptional } from 'class-validator';
import { TodoStatus } from '../schemas/todo.schema';

export class UpdateTodoDto {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  desription?: string;

  @IsEnum(TodoStatus)
  @IsOptional()
  status?: TodoStatus;
}
