// 引入typeormModule
// import { TypeOrmModule } from '@nestjs/typeorm';
import { IsInt } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('collect_theme')
export class cachingEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  theme_id: number;

  @Column()
  user_id: number;

  @Column()
  level: number;
}
