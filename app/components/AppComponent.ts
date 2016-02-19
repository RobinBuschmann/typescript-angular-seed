///<reference path="../../typings/tsd.d.ts"/>
///<reference path="../jspm_packages/github/RobinBuschmann/angular-typescript@0.0.10/src/at-angular.ts"/>

import * as at from 'at';
import app from '../app'
import {UserProfileComponent} from "../modules/userProfile/components/UserProfileComponent";
import {HelloWorldComponent} from "./HelloWorldComponent";

/**
 * @ngdoc directive
 * @name app
 * @restrict E
 */
@at.Component({
  moduleName: app.name,
  selector: 'app',
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
