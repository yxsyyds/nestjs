import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { userEntity } from './user.entity';
// 引入userDto
// import { userProvideDto } from './Dto/user.dto';

@Injectable()
export class UserService {
  constructor(@InjectRepository(userEntity) private userRepository: Repository<userEntity>) {}
  // private UserProvideDto: userProvideDto;
  //查看
  findInfo() {
    console.log(123);
  }
  //查看全部
  findAll(): Promise<userEntity[]> {
    // const data = this.userRepository.find();
    return this.userRepository.find();
  }
  //查看单个
  findOne(id: number): Promise<userEntity> {
    return this.userRepository.findOneBy({ id: id });
  }

  //同步删除
  async remove(id: number): Promise<DeleteResult> {
    return await this.userRepository.delete(id);
  }
  //添加数据
  async create(data: userEntity): Promise<userEntity> {
    const user = this.userRepository.create(data);
    const createData = await this.userRepository.save(user);
    console.log(createData);

    return user;
  }
  //修改用户
  async update(data: userEntity): Promise<userEntity> {
    await this.userRepository.update(data.id, data);
    return data;
  }
}
