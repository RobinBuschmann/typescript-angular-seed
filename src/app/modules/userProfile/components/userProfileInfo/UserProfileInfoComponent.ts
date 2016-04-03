import * as at from 'at';
import {userProfile} from "../../userProfile";

/**
 * @ngdoc directive
 * @name userProfileInfo
 * @restrict E
 *
 * @param {string} [userName] Name of the user of this info
 */
@at.Component({
  moduleName: userProfile.name,
  componentName: 'userProfileInfo',
  templateUrl: './app/modules/userProfile/components/userProfileInfo/userProfileInfoTpl.html'
})
export class UserProfileInfoComponent {

  @at.Attribute({isOptional: true})
  userName: string;

  constructor() {
  }


}
