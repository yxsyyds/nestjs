import { Controller, Get, Post, Req, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { MyLogger2 } from './mylogger2.service';
import { Request, Response, Express } from 'express';
import { FileInterceptor, AnyFilesInterceptor } from '@nestjs/platform-express';

@Controller('mylogger')
export class MyLoggerController {
  constructor(private mylogger2: MyLogger2) {}

  @Get('/log')
  log(@Req() req: Request) {
    this.mylogger2.customLog();
    this.mylogger2.error('this is wrong');
    // console.log(req.cookies);
    // console.log(req.signedCookies);
    // console.log(req);

    return 123;
  }

  //输出附件cookie
  //   @Get('/log2')
  //   log2(@Res({ passthrough: true }) res: Response) {
  //     res.cookie('nestjsDe222', '123');
  //     // console.log(res);

  //     return 123;
  //   }

  @Post('/upload')
  @UseInterceptors(AnyFilesInterceptor())
  uploadFile(@UploadedFile() file: Express.Multer.File, @Req() req: Request) {
    console.log(file);
    console.log(req.files);
    const filess = req.files;
    // const reader = new FileReader();
    // reader.onload = function (e) {
    //   console.log(e.target.result);
    // };
    // reader.readAsText(filess[0]);
  }
}
