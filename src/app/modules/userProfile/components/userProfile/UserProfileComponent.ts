import * as at from 'at';
import {userProfile} from "../../userProfile";
import {UserProfileSettingsComponent} from "./../UserProfileSettingsComponent";
import {UserProfileInfoComponent} from "./../userProfileInfo/UserProfileInfoComponent";
import {AppService} from "../../../core/services/AppService";

/**
 * @ngdoc directive
 * @name userProfile
 * @restrict E
 */
@at.Component({
  module: userProfile,
  componentName: 'userProfile',
  templateUrl: './app/modules/userProfile/components/userProfile/userProfileTpl.html'
})
@at.RouteConfig({
  module: userProfile,
  stateConfigs: [
    {
      name: 'userProfile.settings',
      url: '/settings',
      views: {
        userProfile: {
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
      views: {userProfile: {component: UserProfileInfoComponent}}
    }
  ],
  conditions: [
    {when: '/userProfile', then: '/userProfile/info'}
  ]
})
@at.Inject(AppService)
export class UserProfileComponent {

  appVersion: string;

  constructor(protected appService: AppService) {

    this.appVersion = appService.getAppVersion();
  }
}
