import { TypeOrmModule } from '@nestjs/typeorm';

export const typeormConfig: TypeOrmModule = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'yxsds',
  entities: [],
  synchronize: true,
};
