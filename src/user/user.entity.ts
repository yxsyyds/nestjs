// 引入typeormModule
// import { TypeOrmModule } from '@nestjs/typeorm';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('user')
export class userEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty({
    type: Number,
  })
  id: number;

  @Column()
  @ApiProperty()
  acount: string;

  @Column()
  @ApiProperty()
  password: string;

  @Column()
  @ApiProperty()
  head_thumbnail: string;
}
