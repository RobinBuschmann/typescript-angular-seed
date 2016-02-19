///<reference path="../../../../typings/tsd.d.ts"/>
///<reference path="../../../jspm_packages/github/RobinBuschmann/angular-typescript@0.0.10/src/at-angular.ts"/>

import * as at from 'at';
import userProfile from '../userProfile';

/**
 * @ngdoc directive
 * @name userProfileInfo
 * @restrict E
 *
 * @param {string} [userName] Name of the user of this info
 */
@at.Component({
  moduleName: userProfile.name,
  selector: 'userProfileInfo',
  template: `
    user profile info "{{vm.userName || 'unknown'}}"
  `
})
export class UserProfileInfoComponent {

  @at.Attribute({isOptional: true})
  userName: string;

}
