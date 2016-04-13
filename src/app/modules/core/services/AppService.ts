import {core} from "../core";
import * as at from 'at';
import {env} from "../config/config";

@at.Service(core.name, 'appService')
@at.Inject('env')
export class AppService {

  private APP_VERSION = '0.0.1';
  
  constructor(protected _env: typeof env) {
    
  }

  getAppVersion() {

    return this.APP_VERSION;
  }
  
  getEnvironment() {
    
    return this._env.name;
  }

}
