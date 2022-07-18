// cats数据库实体
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CatsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;
}
