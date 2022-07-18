import { Module, MiddlewareConsumer, NestModule, RequestMethod } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { CatsMiddleware, catsM } from './cats.middleware';

// 引入TypeOrmModule
import { TypeOrmModule } from '@nestjs/typeorm';
// 引入catsEntity实体
import { CatsEntity } from './cats.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CatsEntity])],
  providers: [CatsService],
  controllers: [CatsController],
  exports: [TypeOrmModule],
})
export class CatsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(CatsMiddleware).forRoutes('cats');// 只对 /cats 路由生效
    // consumer.apply(CatsMiddleware).forRoutes({ path: 'cats/findAll', method: RequestMethod.GET });// 只有GET请求的/cats/findAll才会走这个中间件
    consumer.apply(CatsMiddleware, catsM).exclude({ path: 'cats/findAll', method: RequestMethod.GET }).forRoutes(CatsController); //引用全部路由并排除某些路由
  }
}
