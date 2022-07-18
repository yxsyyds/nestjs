import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { UserModule } from './user/user.module';
import { ServeStaticModule } from '@nestjs/serve-static';
// 引入TypeOrmModule
import { TypeOrmModule } from '@nestjs/typeorm';
// 引入typeorm配置文件 (不需要，可以不引入，直接用typeorm读取根目录ormconfig.json载入)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { typeormConfig } from '../config/ormconfig';

// 引入cats实体
// import { CatsEntity } from './cats/cats.entity';

// 引入user实体
// import { userEntity } from './user/user.entity';

// 引入mongoose
import { MongooseModule } from '@nestjs/mongoose';
// import { MongodbController } from './mongodb/mongodb.controller';
// import { MongodbService } from './mongodb/mongodb.service';
import { MongodbModule } from './mongodb/mongodb.module';

// 配置nestjs的config
import { ConfigModule } from '@nestjs/config';

// 引入nestjs配置文件
import configuration from '../config/configuration';

import { CachingModule } from './Caching/caching.module';
import { ScheduleModule } from '@nestjs/schedule';

import { MyLoggerModule } from '../src/MyLogger/mylogger.module';

// 事件
import { EventEmitterModule } from '@nestjs/event-emitter';
import { SocketModule } from './socket/socket.module';
import { join } from 'path';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development', '.env.production'],
      isGlobal: true,
      load: [configuration],
    }), //配置config
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'yxsds',
      // entities: [CatsEntity, userEntity],使用autoLoadEntities: true,来自动加载实体
      autoLoadEntities: true,
      synchronize: true,
    }), //typeorm配置数据库
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    ScheduleModule.forRoot(),
    EventEmitterModule.forRoot(),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/config'),
    CatsModule,
    UserModule,
    MongodbModule,
    CachingModule,
    MyLoggerModule,
    SocketModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
