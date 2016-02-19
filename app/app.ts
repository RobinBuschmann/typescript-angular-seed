///<reference path="../typings/tsd.d.ts"/>

import * as angular from 'angular';
import userProfile from './modules/userProfile/main';
import 'angular-ui-router';

let app = angular.module('ts-ng-seed', [
  userProfile.name,
  'ui.router'
]);

export default app;
