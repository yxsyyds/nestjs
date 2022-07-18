import { CacheModule, Module } from '@nestjs/common';
import { CachingController } from './caching.controller';
import { CachingService } from './caching.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userEntity } from '../user/user.entity';
import { cachingEntity } from './caching.entity';

@Module({
  imports: [CacheModule.register(), TypeOrmModule.forFeature([cachingEntity])],
  controllers: [CachingController],
  providers: [CachingService],
})
export class CachingModule {}
