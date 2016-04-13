import * as angular from 'angular';
import {core} from "../core/core";
import 'angular-ui-router';

export const settings = angular.module('ts-ion-seed.settings', [
  core.name,
  'ui.router',
]);
