
import * as at from 'at';
import {core} from "../core";

/**
 * @ngdoc directive
 * @name app
 * @restrict E
 */
@at.Component({
  moduleName: core.name,
  componentName: 'helloWorld',
  template: `
    Hello world!
  `
})
export class HelloWorldComponent {}
