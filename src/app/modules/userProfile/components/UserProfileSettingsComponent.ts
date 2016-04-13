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
     <ion-view>
      <ion-content class="has-header">
        <div class="card">
          <div class="item item-text-wrap">
            The resolved user name from route configuration: <br/>
            <strong>{{vm.userName}}</strong>
          </div>
        </div>
      </ion-content>
    </ion-view>

  `
})
export class UserProfileSettingsComponent {

  @at.Attribute()
  userName: string;

}
