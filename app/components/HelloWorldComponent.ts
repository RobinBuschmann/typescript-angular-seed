///<reference path="../../typings/tsd.d.ts"/>
///<reference path="../jspm_packages/github/RobinBuschmann/angular-typescript@0.0.10/src/at-angular.ts"/>

import * as at from 'at';
import app from '../app'

/**
 * @ngdoc directive
 * @name app
 * @restrict E
 */
@at.Component({
  moduleName: app.name,
  selector: 'helloWorld',
  template: `
    Hello world!
  `
})
export class HelloWorldComponent {}
