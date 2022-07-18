import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
// 暴露实现了CanActivate接口的AuthGuard类
export class AuthGuard implements CanActivate {
  // 实现CanActivate接口的canActivate方法
  async canActivate(context: ExecutionContext): Promise<boolean> {
    // 获取请求对象
    const request = context.switchToHttp().getRequest();
    // console.log(123, request);

    // // 获取请求头
    // const authorization = request.headers.authorization;
    // 判断请求头是否存在
    if (request) {
      //   // 返回true
      return true;
    } else {
      // 返回false
      return false;
    }
  }
}
