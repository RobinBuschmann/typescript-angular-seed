import * as at from 'at';
import app from '../app'
import {UserProfileComponent} from "../modules/userProfile/components/userProfile/UserProfileComponent";
import {HelloWorldComponent} from "../modules/core/components/HelloWorldComponent";
import {NiceLabelComponent} from "../modules/core/components/NiceLabelComponent";
import {env} from "../modules/core/config/config";


/**
 * @ngdoc directive
 * @name app
 * @restrict E
 *
 */
@at.Component({
  module: app,
  directives: [NiceLabelComponent],
  componentName: 'app',
  template: `

    <nav class="navbar navbar-inverse">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="#"><nice-label color="'#009688'">My incredible application</nice-label></a>
        </div>
        <div id="navbar">
          <ul class="nav navbar-nav">
            <li><a ui-sref="home" ui-sref-active="active">Home</a></li>
            <li><a ui-sref="userProfile" ui-sref-active="active">UserProfile</a></li>
          </ul>
        </div>
      </div>
    </nav>
    
    <div ui-view="main"></div>
  `
})
@at.RouteConfig({
  module: app,
  stateConfigs: [
    {
      name: 'home',
      url: '/',
      views: {main: {component: HelloWorldComponent}}
    },
    {
      name: 'userProfile',
      url: '/userProfile',
      views: {main: {component: UserProfileComponent}}
    }
  ],
  otherwise: '/'
})
@at.Inject('env')
export class AppComponent {

  constructor(protected _env: typeof env) {

    console.log('ENV: ' + _env.name);
  }
}
