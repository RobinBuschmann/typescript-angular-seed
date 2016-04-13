import * as at from 'at';
import {core} from "../core";

/**
 * @ngdoc directive
 * @name app
 * @restrict E
 */
@at.View({
  template: `
    <ion-view view-title="Bla">
      <ion-content>
        <div class="card">
          <div class="item item-text-wrap">
            Hello world!
          </div>
        </div>
      </ion-content>
    </ion-view>
  `
})
export class HelloWorldView {

  constructor() {

    let listStr: string[];
    let listAnother: Another[];
    let listAny: Any[] = listAnother;
  }

}

interface Any {
  name: string;
}

interface Another extends Any {
  id: number;
}
