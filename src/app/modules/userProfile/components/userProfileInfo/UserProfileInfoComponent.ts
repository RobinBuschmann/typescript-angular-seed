///<reference path="../../../../../typings/tsd.d.ts"/>
///<reference path="../../../../../jspm_packages/github/RobinBuschmann/angular-typescript@0.0.15/dist/at-angular.d.ts"/>

import * as at from 'at';
import {userProfile} from "../../userProfile";
import template from "./userProfileInfoTpl.html!ng-template";

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
  templateUrl: template.templateUrl
})
export class UserProfileInfoComponent {

  @at.Attribute({isOptional: true})
  userName: string;

  constructor() {
  }


}
