import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
// 引入 UserService
import { UserService } from './user.service';
import { userEntity } from './user.entity';
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('findInfo')
  findInfo() {
    return this.userService.findInfo();
  }

  @Get('findAll')
  findAll() {
    return this.userService.findAll();
  }

  @Get('findOne/:id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(id);
  }
  @Post('create')
  create(@Body() data: userEntity) {
    return this.userService.create(data);
  }

  @Post('update')
  update(@Body() data: userEntity) {
    return this.userService.update(data);
  }

  @Delete('remove')
  remove(@Body('id') id: number) {
    return this.userService.remove(id);
  }
}
