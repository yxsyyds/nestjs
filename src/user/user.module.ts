import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';

// 引入控制器
import { UserController } from './user.controller';

// 引入实体
import { userEntity } from './user.entity';

// 引入订阅者
import { UserSubscriber } from './user.Subscriber';
@Module({
  imports: [TypeOrmModule.forFeature([userEntity])],
  providers: [UserService, UserSubscriber],
  controllers: [UserController],
})
export class UserModule {}
