import { Injectable } from '@nestjs/common';

@Injectable()
export class SocketService {
  constructor() {}

  async getHello(): Promise<string> {
    return 'Hello World!';
  }
}
