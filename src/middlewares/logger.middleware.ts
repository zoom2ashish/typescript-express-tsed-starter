import { Middleware, Req, $log, IMiddleware } from '@tsed/common';

@Middleware()
export class LoggerMiddleware implements IMiddleware {
  use(@Req() req: Req) {
    $log.info(`${req.method} - ${req.path}`);
  }
}