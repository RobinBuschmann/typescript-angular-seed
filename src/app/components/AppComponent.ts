///<reference path="../../typings/tsd.d.ts"/>
///<reference path="../../jspm_packages/github/RobinBuschmann/angular-typescript@0.0.15/dist/at-angular.d.ts"/>

import * as at from 'at';
import app from '../app'
import {UserProfileComponent} from "../modules/userProfile/components/userProfile/UserProfileComponent";
import {HelloWorldComponent} from "../modules/core/components/HelloWorldComponent";

// import components, that will be used in the current one
import '../modules/core/components/NiceLabelComponent';
import {env} from "../modules/core/config/config";


/**
 * @ngdoc directive
 * @name app
 * @restrict E
 *
 */
@at.Component({
  moduleName: app.name,
  componentName: 'app',
  template: `

    <ion-side-menus>
      <!-- Left menu -->
      <ion-side-menu side="left">
        <ion-header-bar class="bar-dark">
            <h1 class="title">
              <nice-label color="'#009688'">My incredible application</nice-label>
            </h1>
          </ion-header-bar>
          <ion-content>
            <ion-list>
              <ion-item ui-sref="home" menu-close>
                Home
              </ion-item>
              <ion-item ui-sref="userProfile" menu-close>
                UserProfile
              </ion-item>
            </ion-list>
          </ion-content>
        </ion-side-menu>
      </ion-side-menu>
      
      <ion-side-menu-content>
          <ion-nav-bar class="bar-dark">
            <ion-nav-back-button>
            </ion-nav-back-button>
      
            <ion-nav-buttons side="left">
              <button class="button button-icon button-clear ion-android-more-vertical" menu-toggle="left">
              </button>
            </ion-nav-buttons>
          </ion-nav-bar>
        <ion-nav-view name="main"></ion-nav-view>
      </ion-side-menu-content>
    
    </ion-side-menus>
  `
})
@at.RouteConfig({
  module: app,
  stateConfigs: [
    {
      name: 'home',
      url: '/',
      views: {main: {component: HelloWorldComponent}}
    },
    {
      name: 'userProfile',
      url: '/userProfile',
      views: {main: {component: UserProfileComponent}}
    }
  ],
  otherwise: '/'
})
@at.Inject('$ionicSideMenuDelegate', 'env')
export class AppComponent {

  constructor(protected $ionicSideMenuDelegate: ionic.sideMenu.IonicSideMenuDelegate,
              protected _env: typeof env) {

    console.log('ENV: ' + _env.name);
  }

  toggleMenu() {
    this.$ionicSideMenuDelegate.toggleLeft(true);
  }
}
