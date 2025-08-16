import { IsOptional, isString } from 'class-validator';

export class CreateMessageDto {
  @isString({ message: 'message has been string' })
  message: string;

  @IsOptional()
  @isString({ message: 'author has been string' })
  author: string;
}
