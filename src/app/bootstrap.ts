///<reference path="../typings/tsd.d.ts"/>
///<reference path="../jspm_packages/github/RobinBuschmann/angular-typescript@master/dist/at-angular.d.ts"/>

import * as angular from 'angular';
import app from './app';

// load app configuration
import './modules/core/config/config';

// load templates
import './templates';

// initial component
import './components/AppComponent';

// boot application
angular.element(document).ready(() =>
  angular.bootstrap(document.body, [app.name]));
