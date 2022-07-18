/* eslint-disable prefer-rest-params */
import { LoggerService, ConsoleLogger } from '@nestjs/common';

export class Mylogger1 extends ConsoleLogger {
  //   log(message: any, ...optionalParams: any[]) {}
  log(message: any, stack?: string, context?: string) {
    super.log.apply(this, arguments);
  }
  error(message: any, stack?: string, context?: string) {
    super.error.apply(this, arguments);
  }
  warn(message: any, ...optionalParams: any[]) {}
  debug(message: any, stack?: string, context?: string) {
    super.debug.apply(this, arguments);
  }
  verbose(message: any, ...optionalParams: any[]) {}

  //   log(message: any, ...optionalParams: any[]) {
  //     console.log(message, ...optionalParams);
  //   }
  //   error(message: any, ...optionalParams: any[]) {}
  //   warn(message: any, ...optionalParams: any[]) {}
  //   debug(message: any, ...optionalParams: any[]) {}
  //   //   log(message: any, stack?: string, context?: string) {
  //   //     super.log.apply(this, arguments);
  //   //   }
  //   //   error(message: any, stack?: string, context?: string) {
  //   //     super.error.apply(this, arguments);
  //   //   }
  //   //   warn(message: any, ...optionalParams: any[]) {}
  //   //   debug(message: any, stack?: string, context?: string) {
  //   //     super.debug.apply(this, arguments);
  //   //   }
  //   verbose(message: any, ...optionalParams: any[]) {}
}
