import * as at from 'at';
import {core} from "../core";

/**
 * @ngdoc directive
 * @name niceLabel
 * @restrict E
 *
 * @param {string} color Color for text
 */
@at.Component({
  moduleName: core.name,
  componentName: 'niceLabel',
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
