import * as angular from 'angular';
import app from './app';

// initial component
import './components/AppComponent';

// bundled templates
import './templates';

// boot application
angular.element(document).ready(() =>
  angular.bootstrap(document.body, [app.name]));
