import * as at from 'at';
import {AppService} from "../../core/services/AppService";

@at.View({
  template: `
    <ion-view>
      <ion-nav-title>Settings</ion-nav-title>
      <ion-content>
        <ion-list>
          <ion-item>
            Version
            <span class="item-note">
              {{vm.appVersion}}
            </span>
          </ion-item>
          <ion-item>
            Environment
            <span class="item-note">
              {{vm.environment}}
            </span>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-view>
  `
})
@at.Inject('appService')
export class SettingsView {

  appVersion: string;
  environment: string;

  constructor(protected appService: AppService) {

    this.appVersion = appService.getAppVersion();
    this.environment = appService.getEnvironment();
  }
}
