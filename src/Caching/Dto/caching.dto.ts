import { Exclude } from 'class-transformer';
import { IsInt } from 'class-validator';
import { cachingEntity } from '../caching.entity';
export class ProvideCaching {
  @IsInt()
  id: number;

  @IsInt()
  theme_id: number;

  @IsInt()
  user_id: number;

  @Exclude() //开启排除属性好像不能与属性校验同时使用
  // @IsInt()
  level: number;

  constructor(partial: Partial<ProvideCaching>) {
    Object.assign(this, partial);
  }
}
