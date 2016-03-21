///<reference path="../../typings/tsd.d.ts"/>
///<reference path="../../jspm_packages/github/RobinBuschmann/angular-typescript@0.0.15/dist/at-angular.d.ts"/>
///<reference path="../modules/core/config/config.d.ts"/>

import * as at from 'at';
import app from '../app'
import {UserProfileComponent} from "../modules/userProfile/components/userProfile/UserProfileComponent";
import {HelloWorldComponent} from "../modules/core/components/HelloWorldComponent";

// import components, that will be used in the current one
import '../modules/core/components/NiceLabelComponent';


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

    <nav class="navbar navbar-inverse">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="#"><nice-label color="'#009688'">My incredible application</nice-label></a>
        </div>
        <div id="navbar">
          <ul class="nav navbar-nav">
            <li><a ui-sref="home" ui-sref-active="active">Home</a></li>
            <li><a ui-sref="userProfile" ui-sref-active="active">UserProfile</a></li>
          </ul>
        </div>
      </div>
    </nav>
    
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
@at.Inject('env')
export class AppComponent {

  constructor(protected env: config.IENV) {

    console.log('env: ' + env.name);
  }
}
