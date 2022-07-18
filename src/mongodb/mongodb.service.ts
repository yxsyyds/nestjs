import { Model } from 'mongoose';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { gmmailextinfos, UserDocument } from './user.schema';
import { DeleteResult, UpdateResult } from 'mongodb';

@Injectable()
export class MongodbService {
  constructor(@InjectModel('gmmailextinfos') private mongodbModel: Model<UserDocument>) {}
  //同步查询所有
  async findAll(): Promise<gmmailextinfos[]> {
    return await this.mongodbModel.find().exec();
  }
  //同步查询一条
  async findOne(id: number): Promise<gmmailextinfos> {
    return this.mongodbModel.findOne({ id: id });
  }
  //同步添加一条
  async create(data: gmmailextinfos): Promise<gmmailextinfos> {
    const user = new this.mongodbModel(data);
    return await user.save();
  }
  //同步删除一条
  async remove(id: number): Promise<DeleteResult> {
    return this.mongodbModel.deleteOne({ id: id });
  }
  //同步修改一条
  async update(data: gmmailextinfos): Promise<UpdateResult> {
    return this.mongodbModel.updateOne({ id: data.id }, data);
  }
  //添加条件查询，通过id,type类型，开始时间和结束时间之间的时间段查询1
  async findByCondition(id: string, type: string, startTime: string, endTime: string): Promise<gmmailextinfos[]> {
    return this.mongodbModel.find({ id: id, type: type, startTime: { $gte: startTime, $lte: endTime } });
  }
}
