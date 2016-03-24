///<reference path="../../../../../typings/tsd.d.ts"/>
///<reference path="../../../../../jspm_packages/github/RobinBuschmann/angular-typescript@0.0.15/dist/at-angular.d.ts"/>

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
  moduleName: userProfile.name,
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
export class UserProfileComponent {

  appVersion: string;

  constructor(protected appService: AppService) {

    this.appVersion = appService.getAppVersion();
  }
}
