import { IsString, IsInt } from 'class-validator';

export class userProvideDto {
  @IsInt()
  id: number;

  @IsString()
  acount: string;

  @IsString()
  password: string;

  @IsString()
  head_thumbnail: string;
}
