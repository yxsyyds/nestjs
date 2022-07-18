import { createParamDecorator, ExecutionContext } from '@nestjs/common';
// 自定义装饰器
export const User = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  console.log(request, 5);

  return request.user;
});
