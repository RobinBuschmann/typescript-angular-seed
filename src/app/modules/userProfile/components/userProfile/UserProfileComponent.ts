///<reference path="../../../../../typings/tsd.d.ts"/>
///<reference path="../../../../../jspm_packages/github/RobinBuschmann/angular-typescript@0.0.15/dist/at-angular.d.ts"/>

import * as at from 'at';
import {userProfile} from "../../userProfile";
import {UserProfileSettingsComponent} from "./../UserProfileSettingsComponent";
import {UserProfileInfoComponent} from "./../userProfileInfo/UserProfileInfoComponent";
import {AppService} from "../../../core/services/AppService";
import template from "./userProfileTpl.html!ng-template";

/**
 * @ngdoc directive
 * @name userProfile
 * @restrict E
 */
@at.Component({
  moduleName: userProfile.name,
  componentName: 'userProfile',
  templateUrl: template.templateUrl
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
@at.Inject('appService')
export class UserProfileComponent {

  appVersion: string;

  constructor(protected appService: AppService) {

    this.appVersion = appService.getAppVersion();
  }
}
