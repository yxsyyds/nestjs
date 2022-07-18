import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { MongodbService } from './mongodb.service';
import { gmmailextinfos } from './user.schema';
import { ConfigService } from '@nestjs/config';

@Controller('mongodb')
export class MongodbController {
  constructor(private mongodbService: MongodbService, private configService: ConfigService) {}

  @Get('findAll')
  findAll() {
    return this.mongodbService.findAll();
  }

  @Get('findOne/:id')
  findOne(@Param('id') id: number) {
    // console.log(process.env.NODE_ENV);
    // console.log(this.configService.get('dataBase'));

    return this.mongodbService.findOne(id);
    // return process.env;
  }

  @Post('create')
  create(@Body() data: gmmailextinfos) {
    return this.mongodbService.create(data);
  }

  @Delete('remove')
  remove(@Body('id') id: number) {
    return this.mongodbService.remove(id);
  }

  @Post('update')
  update(@Body() data: gmmailextinfos) {
    return this.mongodbService.update(data);
  }
}
