///<reference path="../../../../typings/tsd.d.ts"/>
///<reference path="../../../../jspm_packages/github/RobinBuschmann/angular-typescript@0.0.15/dist/at-angular.d.ts"/>

import * as at from 'at';
import {userProfile} from "../userProfile";

/**
 * @ngdoc directive
 * @name userProfileSettings
 * @restrict E
 *
 * @param {string} userName Name of the user of this info
 */
@at.Component({
  moduleName: userProfile.name,
  componentName: 'userProfileSettings',
  template: `
     yeah, user profile settings for "{{vm.userName}}"!
  `
})
export class UserProfileSettingsComponent {

  @at.Attribute()
  userName: string;

}
