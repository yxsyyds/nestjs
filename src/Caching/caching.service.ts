import { CACHE_MANAGER, Inject, Injectable, Logger } from '@nestjs/common';

// 引入dto文件夹的ProvideCaching
import { ProvideCaching } from './dto/caching.dto';

//与缓存存储的交互
import { Cache } from 'cache-manager';
import { InjectRepository } from '@nestjs/typeorm';
import { cachingEntity } from './caching.entity';
import { Repository } from 'typeorm';
import { Cron, CronExpression, Interval, Timeout } from '@nestjs/schedule';

@Injectable()
export class CachingService {
  // constructor(private cachingDto: ProvideCaching[] = []) {}
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    @InjectRepository(cachingEntity) private cachingRepository: Repository<cachingEntity>,
  ) {}
  private cachingDto: ProvideCaching[] = [];

  private readonly logger = new Logger(CachingService.name);

  // 定时任务，每45秒执行一次
  // @Cron('45 * * * * *')
  // // @Cron(new Date(Date.now()+10*1000)) 用于在应用启动 10 秒后运行。
  // handleCron() {
  //   console.log(123);

  //   this.logger.debug('called when the current second is 45');
  // }

  // @Interval(10000) //每10秒执行一次的定时任务
  // handleInterval() {
  //   this.logger.debug('handleInterval 10s');
  // }

  // 10秒后执行的间隔定时的定时任务
  // @Timeout(10000)
  // handleTimeout() {
  //   this.logger.debug('handleTimeout 10s');
  // }
  // @Timeout('notifications', 2500)
  // handleTimeout() {
  //   console.log(211);

  // }
  // @Cron(CronExpression.EVERY_5_SECONDS, {
  //   name: 'notifications',
  // })
  triggerNotifications() {
    this.logger.debug('called when the current second is 45');
  }

  async findAll(): Promise<ProvideCaching[]> {
    const value = await this.cacheManager.get('caching');

    return this.cachingDto;
  }

  //   push添加数据
  async pushCaching(data: ProvideCaching) {
    await this.cacheManager.set('caching', data, { ttl: 1000 });
    const value1 = await this.cacheManager.get('caching');
    // 从缓存中删除caching键值对
    // await this.cacheManager.del('caching');
    // 从缓存中清空全部键值对
    // await this.cacheManager.reset();

    return this.cachingDto.push(data);
  }

  async findA1(): Promise<ProvideCaching[]> {
    return this.cachingRepository.find();
  }

  async create(data: ProvideCaching): Promise<ProvideCaching> {
    const caching = this.cachingRepository.create(data);
    await this.cachingRepository.save(caching);
    return caching;
  }
}
