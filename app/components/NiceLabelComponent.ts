///<reference path="../../typings/tsd.d.ts"/>
///<reference path="../jspm_packages/github/RobinBuschmann/angular-typescript@0.0.10/src/at-angular.ts"/>

import * as at from 'at';
import app from '../app'

/**
 * @ngdoc directive
 * @name niceLabel
 * @restrict E
 *
 * @param {string} color Color for text
 */
@at.Component({
  moduleName: app.name,
  selector: 'niceLabel',
  template: `
    <span ng-transclude ng-style="{color: vm.color || 'blue'}">
    </span>
  `
})
export class NiceLabelComponent implements at.IPostLink, at.IPreLink{

  @at.Attribute({
    isOptional: true
  })
  color: string;

  onPostLink(element: JQuery) {

    // Need to access the <nice-label> element ?
    // feel free to manipulate, but be careful ;)

    console.log(`Nice label colored with "${this.color}"`, element);
  }

  onPreLink() {

    // On pre link is available, too!
    // Element is optional, but you could access
    // <nice-label> as well as in onPostLink
    // if you like to

  }

}
