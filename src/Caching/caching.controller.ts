import { Body, CacheInterceptor, ClassSerializerInterceptor, Controller, Get, Post, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { userEntity } from 'src/user/user.entity';
import { CachingService } from './caching.service';
import { ProvideCaching } from './dto/caching.dto';
// import { ValidationPipe, ParseIntPipe1 } from '../cats/pipe/validate.pipe';

import { cachingEntity } from './caching.entity';
import { SchedulerRegistry } from '@nestjs/schedule';

@Controller('caching')
@UseInterceptors(CacheInterceptor)
export class CachingController {
  constructor(private cachingService: CachingService, private schedulerRegistry: SchedulerRegistry) {}
  @Get('/findAll')
  findAll() {
    const data = this.cachingService.findAll();
    return data;
  }
  //   push添加数据
  @Post('/pushCaching')
  async pushCaching(@Body() data: ProvideCaching) {
    const resdata = await this.cachingService.pushCaching(data);
  }

  @Get('/findA1')
  async findA1(): Promise<ProvideCaching[]> {
    const data = await this.cachingService.findA1();
    return data;
  }

  @Post('/create')
  @UsePipes(new ValidationPipe())
  async create(@Body() data: ProvideCaching): Promise<ProvideCaching> {
    const caching = await this.cachingService.create(data);
    return caching;
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/findA2')
  async findA2(): Promise<ProvideCaching> {
    // const job = this.schedulerRegistry.getCronJob('notifications');
    // console.log(job.lastDate());
    // job.stop();
    // const data = await this.cachingService.findA1();
    // return data;

    return new ProvideCaching({
      id: 1,
      theme_id: 12,
      user_id: 1,
      level: 1,
    });
  }

  @Get('/findA3')
  async findA3() {
    // interface A1 {
    //   name: string;
    //   sex: string;
    //   age: number;
    // }
    // interface A2 {
    //   id: number;
    // }
    // type ma1 = Exclude<keyof A1, 'name' | 'sex'>;
    // const a: Exclude<keyof A1, 'name' | 'sex'> = 'age';
    // console.log(a);
    // const a1: { name: string; [propName: string]: unknown } = {
    //   name: '猴子',
    //   age: 18,
    // };
    // const d: (a: number) => void = (a) => {
    //   console.log('我是一个函数', a);
    // };
    // d(1);
    enum sex {
      nv = 0,
      nan = 1,
    }
    const a: (a: sex) => void = (a) => {
      console.log(a);
    };
    a(1);
  }
}
