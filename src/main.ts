import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { catsM } from './cats/cats.middleware';
import { MyLoggerModule } from './MyLogger/mylogger.module';
import { join } from 'path';
import { Mylogger } from './utils/Mylogger';
import { Mylogger1 } from './MyLogger/mulogger.service';
// 将cookie-parser配置为全局中间件
import * as cookiesParser from 'cookie-parser';
import fastifyCookie from '@fastify/cookie';
import { WsAdapter1 } from './socket/ws.adapter';
import { WsAdapter } from '@nestjs/platform-ws';
// openApi接口文档
import { SwaggerModule, DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    // logger: new Mylogger(),
    bufferLogs: true,
  });
  // app.use(cookiesParser('nestjsDemo'));
  // app.use(fastifyCookie, {
  //   secret: 'my-secret',
  // });
  app.use(catsM); //全局中间件
  // app.useGlobalFilters(); //全局过滤器
  app.useLogger(app.get(Mylogger1));
  app.useStaticAssets(join(__dirname, '..', 'public'));

  // websocket
  app.useWebSocketAdapter(new WsAdapter(app));
  // openApi接口文档Swagger
  const config = new DocumentBuilder().setTitle('Cats example').setDescription('The cats API description').setVersion('1.0').addTag('cats').build();
  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  };
  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('api', app, document);
  // app.useStaticAssets(join(__dirname, '..', 'public'));
  await app.listen(3000);
}
bootstrap();
