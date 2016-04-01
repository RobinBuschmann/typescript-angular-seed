import {core} from "../core";
import * as at from 'at';

@at.Service(core.name, 'appService')
export class AppService {

  private APP_VERSION = 'test';

  getAppVersion() {

    return this.APP_VERSION;
  }

}
