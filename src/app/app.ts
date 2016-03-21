///<reference path="../typings/tsd.d.ts"/>

import * as angular from 'angular';
import 'angular-ui-router';
import {userProfile} from "./modules/userProfile/userProfile";
import {core} from "./modules/core/core";

let app = angular.module('ts-ng-seed', [
  core.name,
  userProfile.name,
  'ui.router'
]);

export default app;
