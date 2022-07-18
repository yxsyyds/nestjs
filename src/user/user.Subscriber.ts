import { Connection, EntitySubscriberInterface, EventSubscriber, InsertEvent, UpdateEvent } from 'typeorm';
import { userEntity } from './user.entity';

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<userEntity> {
  constructor(connection: Connection) {
    connection.subscribers.push(this);
  }

  listenTo() {
    return userEntity;
  }

  beforeInsert(event: InsertEvent<userEntity>): void {
    console.log(`BFFORE USER INSERTED:`, event.entity);
  }
  //修改之后
  beforeUpdate(event: UpdateEvent<userEntity>): void {
    console.log(`AFTER USER UPDATED:`, event.entity);
  }
  //   // 初始化
  //   constructor(private readonly connection: Connection) {
  //     this.connection.subscribers.push(this);
  //   }

  //   // 插入数据
  //   listenTo() {
  //     return userEntity;
  //   }

  //   // 插入数据
  //   async afterInsert(event: InsertEvent<userEntity>) {
  //     console.log('插入数据', event.entity);
  //   }
}
