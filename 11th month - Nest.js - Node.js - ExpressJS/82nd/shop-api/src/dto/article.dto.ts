import { Expose } from 'class-transformer';

export class ArticleDto {
  @Expose()
  title!: string;

  @Expose()
  description!: string;
}
