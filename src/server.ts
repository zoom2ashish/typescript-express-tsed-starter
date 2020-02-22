import { ServerLoader, ServerSettings, GlobalAcceptMimesMiddleware } from '@tsed/common';
import { resolve, join } from 'path';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as methodOverride from 'method-override';
import * as compression from 'compression';
import * as serveStatic from 'serve-static';
import { LoggerMiddleware } from './middlewares/logger.middleware';

const rootDir = resolve(__dirname);

@ServerSettings({
  rootDir,
  port: 5000,
  acceptMimes: [ 'application/json' ],
  mount: {
    '/api/v1': `${rootDir}/controllers/**/*.ts`
   },
  componentsScan: [
    `${rootDir}/middlewares/**/*.ts`
  ],
  statics: {
    "/": `${rootDir}/webapp`
 }
})
export default class Server extends ServerLoader {

  public $beforeRoutesInit(): void | Promise<any> {
    this
      .use(GlobalAcceptMimesMiddleware)
      .use(LoggerMiddleware)
      .use(cookieParser())
      .use(compression({}))
      .use(methodOverride())
      .use(bodyParser.json())
      .use(bodyParser.urlencoded({
        extended: true
      }));
  }

}