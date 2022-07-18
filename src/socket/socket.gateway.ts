import { Logger, UseInterceptors } from '@nestjs/common';
import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse } from '@nestjs/websockets';

import { Server } from 'ws';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TransformInterceptor } from 'src/cats/interceptor/logging.interceptor';

@WebSocketGateway(3002)
export class SocketGateway {
  @WebSocketServer()
  server: Server;

  private readonly logger = new Logger(SocketGateway.name);

  // @SubscribeMessage('events')
  // handleEvents(@MessageBody() data: string, @ConnectedSocket() client: SocketGateway): string {
  //   this.logger.log(`111111111Event received: ${data}`);
  //   this.logger.log(`22222 received: ${client}`);
  //   return data;
  // }

  @UseInterceptors(new TransformInterceptor())
  @SubscribeMessage('events')
  onEvent(client: any, data: any): Observable<WsResponse<number>> {
    // console.log(client);
    this.logger.log(`111111111Event received: ${data}`);
    return from([1, 2, 3]).pipe(map((item) => ({ event: 'events', data: item })));
    // const data1: WsResponse<number> = {
    //   event: 'events',
    //   data,
    // };
    // return data1;
  }
}
