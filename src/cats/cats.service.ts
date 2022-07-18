import { Injectable } from '@nestjs/common';
// 引入dto文件夹的ProvideCats
import { ProvideCats } from './dto/cats.dto';
// 引入InjectRepository
import { InjectRepository } from '@nestjs/typeorm';
// 引入typeorm中的Repository
import { Repository } from 'typeorm';
// 引入cats数据库实体
import { CatsEntity } from './cats.entity';
import { WebSocketGateway } from '@nestjs/websockets';

@Injectable()
export class CatsService {
  constructor(@InjectRepository(CatsEntity) private catsRepository: Repository<CatsEntity>) {}

  private cats: ProvideCats[] = [];

  pushCats(data: ProvideCats) {
    this.cats.push(data);
  }

  findInfo() {
    return this.cats;
  }
}
