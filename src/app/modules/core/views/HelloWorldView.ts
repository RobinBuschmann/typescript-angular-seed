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
    <ion-view view-title="Bla">
      <ion-content class="has-header">
          Hello world!
        </ion-content>
    </ion-view>
  `
})
export class HelloWorldComponent implements at.IPreLink{

  onPreLink() {


  }

}
