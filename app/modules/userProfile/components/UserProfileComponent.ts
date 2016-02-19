///<reference path="../../../../typings/tsd.d.ts"/>
///<reference path="../../../jspm_packages/github/RobinBuschmann/angular-typescript@0.0.10/src/at-angular.ts"/>

import * as at from 'at';
import userProfile from '../userProfile';
import {UserProfileSettingsComponent} from "./UserProfileSettingsComponent";
import {UserProfileInfoComponent} from "./UserProfileInfoComponent";

/**
 * @ngdoc directive
 * @name userProfile
 * @restrict E
 */
@at.Component({
  moduleName: userProfile.name,
  selector: 'userProfile',
  template: `
    <div ui-view="userProfile"></div>

    <a ui-sref="userProfile.settings">settings</a>
    <a ui-sref="userProfile.info">info</a>
  `
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
export class UserProfileComponent {

}
