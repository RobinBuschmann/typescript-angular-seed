import * as angular from 'angular';
import {core} from "../core/core";
import 'angular-ui-router';

export const userProfile = angular.module('ts-ng-seed.user-profile', [
  core.name,
  'ui.router',
]);
