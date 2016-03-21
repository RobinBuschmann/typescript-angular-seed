import * as angular from 'angular';
import app from './app';

// load app configuration
import './modules/core/config/config';

// initial component
import './components/AppComponent';

// boot application
angular.element(document).ready(() =>
  angular.bootstrap(document.body, [app.name]));
