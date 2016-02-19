import * as angular from 'angular';
import app from './app';

// Before any app component can be loaded, the app module
// has to be created (which happens in the app.ts file).
// That's why we separate the app module creation and
// the loading of the following components:

// directives
// <import directives here>

// components
import './components/AppComponent';
import './components/NiceLabelComponent';


// After that, we can boot the entire application:

angular.element(document).ready(() =>
  angular.bootstrap(document.body, [app.name]));
