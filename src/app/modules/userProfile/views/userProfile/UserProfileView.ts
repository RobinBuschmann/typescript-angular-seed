import * as at from 'at';
import {userProfile} from "../../userProfile";
import {AppService} from "../../../core/services/AppService";
import {UserProfileSettingsComponent} from "../../components/UserProfileSettingsComponent";
import {UserProfileInfoComponent} from "../../components/userProfileInfo/UserProfileInfoComponent";

@at.View({
  templateUrl: './app/modules/userProfile/views/userProfile/userProfileTpl.html'
})
@at.RouteConfig({
  module: userProfile,
  stateConfigs: [
    {
      name: 'userProfile.settings',
      url: '/settings',
      views: {
        userProfileSettings: {
          component: UserProfileSettingsComponent,
          resolve: {
            userName: () => 'Elisa'
          }
        }
      }
    },
    {
      name: 'userProfile.info',
      url: '/info',
      views: {userProfileInfo: {component: UserProfileInfoComponent}}
    }
  ],
  conditions: [
    {when: '/userProfile', then: '/userProfile/info'}
  ]
})
@at.Inject('appService')
export class UserProfileView {

  appVersion: string;

  constructor(protected appService: AppService) {

    this.appVersion = appService.getAppVersion();
  }
}
