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
  module: userProfile,
  componentName: 'userProfileSettings',
  template: `
     yeah, user profile settings for "{{vm.userName}}"!
  `
})
export class UserProfileSettingsComponent {

  @at.Input()
  userName: string;

}
