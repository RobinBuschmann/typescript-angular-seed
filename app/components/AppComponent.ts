///<reference path="../../typings/tsd.d.ts"/>
///<reference path="../jspm_packages/github/RobinBuschmann/angular-typescript@0.0.15/dist/at-angular.d.ts"/>

import * as at from 'at';
import app from '../app'
import {UserProfileComponent} from "../modules/userProfile/components/userProfile/UserProfileComponent";
import {HelloWorldComponent} from "../modules/core/components/HelloWorldComponent";

import '../modules/core/components/NiceLabelComponent';

/**
 * @ngdoc directive
 * @name app
 * @restrict E
 */
@at.Component({
  moduleName: app.name,
  componentName: 'app',
  template: `
    <div>
      <nice-label color="'#009688'">My incredible application</nice-label>
    </div>

    <a ui-sref="home" ui-sref-active="active">home</a> |
    <a ui-sref="userProfile" ui-sref-active="active">userProfile</a>

    <div ui-view="main"></div>
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
export class AppComponent {}
