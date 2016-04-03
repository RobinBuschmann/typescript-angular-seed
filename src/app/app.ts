import * as angular from 'angular';
import 'ionic';
import 'angular-ui-router';
import {userProfile} from "./modules/userProfile/userProfile";
import {core} from "./modules/core/core";

let app = angular.module('ts-ion-seed', [
  'ionic',
  core.name,
  userProfile.name,
  'ui.router'
]);

export default app;
