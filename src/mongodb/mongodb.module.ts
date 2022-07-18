import { Module } from '@nestjs/common';
// 引入控制器和提供者
import { MongodbController } from './mongodb.controller';
import { MongodbService } from './mongodb.service';
// 引入mongoose
import { MongooseModule } from '@nestjs/mongoose';
import { GmmailextinfoSchema } from './user.schema';

// 引入nestjs的config的模块
import { ConfigModule } from '@nestjs/config';

@Module({
  // imports: [MongooseModule.forFeature([{ name: 'gmmailextinfos', schema: GmmailextinfoSchema }])],
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'gmmailextinfos',
        useFactory: () => {
          const schema = GmmailextinfoSchema;
          schema.pre('save', () => console.log('hello from pre save')); //save之前执行
          return schema;
        },
      },
    ]),
    ConfigModule,
  ], //钩子
  controllers: [MongodbController],
  providers: [MongodbService],
})
export class MongodbModule {}
