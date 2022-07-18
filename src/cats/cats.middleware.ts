import { NestMiddleware, Injectable } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class CatsMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('CatsMiddleware');
    next();
  }
}
// 函数类型的中间件
export function catsM(req: Response, res: Response, next: NextFunction) {
  // console.log('function next');
  next();
}
