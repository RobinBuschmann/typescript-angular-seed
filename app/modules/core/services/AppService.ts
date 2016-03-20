import {core} from "../core";

@at.Service(core.name, 'appService')
export class AppService {

  private APP_VERSION = 'test';
  
  getAppVersion() {
    
    return this.APP_VERSION;
  }
  
}
