import { Module } from '@nestjs/common';
import { Mylogger1 } from './mulogger.service';
import { MyLoggerController } from './mylogger.controller';
import { MyLogger2 } from './mylogger2.service';
@Module({
  exports: [Mylogger1],
  providers: [Mylogger1, MyLogger2],
  controllers: [MyLoggerController],
})
export class MyLoggerModule {}
