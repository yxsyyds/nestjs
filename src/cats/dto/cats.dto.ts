import { IsString, IsInt, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class ProvideCats {
  @IsString()
  @ApiProperty()
  name: string;

  @IsInt()
  @ApiProperty()
  age: number;

  @IsEmail()
  @ApiProperty()
  email: string;
}

export class FindOneParams {
  @IsInt()
  @ApiProperty()
  id: number;
}
