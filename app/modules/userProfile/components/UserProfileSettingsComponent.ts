///<reference path="../../../../typings/tsd.d.ts"/>
///<reference path="../../../jspm_packages/github/RobinBuschmann/angular-typescript@0.0.10/src/at-angular.ts"/>

import * as at from 'at';
import userProfile from '../userProfile'

/**
 * @ngdoc directive
 * @name userProfileSettings
 * @restrict E
 *
 * @param {string} userName Name of the user of this info
 */
@at.Component({
  moduleName: userProfile.name,
  selector: 'userProfileSettings',
  template: `
    yeah, user profile settings for "{{vm.userName}}"!
  `
})
export class UserProfileSettingsComponent {

  @at.Attribute()
  userName: string;

}
