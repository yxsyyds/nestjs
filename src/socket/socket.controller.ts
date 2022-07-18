import { Controller, Get } from '@nestjs/common';

import { SocketService } from './socket.service';

@Controller('socket')
export class SocketController {
  constructor(private readonly socketService: SocketService) {}

  @Get('/getHello')
  async getHello(): Promise<string> {
    return this.socketService.getHello();
  }
}
