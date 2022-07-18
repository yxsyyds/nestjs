import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  HttpStatus,
  HttpException,
  UseFilters,
  UsePipes,
  Param,
  UseGuards,
  ParseArrayPipe,
} from '@nestjs/common';
import { UseInterceptors } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Response } from 'express';
import { HttpExceptionFilter } from './http-exception.filter';
// 引入dto文件夹的ProvideCats
import { ProvideCats } from './dto/cats.dto';

// 引入pipe文件夹的ValidationPipe
// import { ValidationPipe, ParseIntPipe1 } from './pipe/validate.pipe'; //自定义管道

// 引入守卫文件夹的AuthGuard类
import { AuthGuard } from './guard/auth.guard';
// 引入拦截器文件夹的LoggerInterceptor
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { LoggerInterceptor, TransformInterceptor } from './interceptor/logging.interceptor';
// 引入装饰器文件夹的User装饰器
import { User } from './decorator/user.decorator';

import { ValidationPipe, ParseIntPipe } from '@nestjs/common'; //内置管道
import { ApiBody } from '@nestjs/swagger';

@Controller('cats')
// @UseInterceptors(TransformInterceptor)
@UseFilters(HttpExceptionFilter) // 该/cats的全局异常过滤器
// @UsePipes(ValidationPipe) // 该cats控制器的全局管道
@UseGuards(AuthGuard)
export class CatsController {
  constructor(private readonly catService: CatsService) {}
  @Get('/findAll')
  // @UseFilters(HttpExceptionFilter)// 单个理由异常过滤器
  async findAll(@User() user: any): Promise<string> {
    // console.log(user, 29);
    // throw new HttpException(
    //   {
    //     status: HttpStatus.FORBIDDEN,
    //     error: 'This is a custom message',
    //   },
    //   HttpStatus.FORBIDDEN,
    // );
    return 'This action returns all cats';
  }

  @Get('/getService')
  async getService(): Promise<ProvideCats[]> {
    return this.catService.findInfo();
  }

  @Post('/pushCats')
  // @UsePipes(new ValidationPipe())// 单个路由的管道
  async pushCats(
    @Body(
      new ValidationPipe({
        disableErrorMessages: true, // 关闭详细错误提示
        whitelist: true, // 白名单，只校验指定的参数（dto写明的）
      }),
    )
    data: ProvideCats,
    @Res() res: Response,
  ) {
    console.log(data);

    this.catService.pushCats(data);
    res.send('ok');
  }

  @Get('/getTest')
  async getValue(): Promise<string> {
    return 'hello';
  }

  @Get('/setPipe/:age')
  async setPipe(@Param('age', new ParseIntPipe()) age: number): Promise<number> {
    console.log(age);

    return age;
  }

  // 管道转换
  @Get('/setPipe1/:age')
  @UsePipes(
    new ValidationPipe({
      transform: true, //负载对象转换 隐式转换
    }),
  )
  async setPipe1(@Param('age') age: number): Promise<number> {
    console.log(typeof age === 'number');

    return age;
  }

  // 管道转换数组
  @Post('/setPipe2')
  @ApiBody({ type: [ProvideCats] })
  async setPipe2(@Body(new ParseArrayPipe({ items: ProvideCats })) data: ProvideCats[]): Promise<ProvideCats[]> {
    console.log(data);
    return data;
  }
}
