import "./app"; angular.module('ts-ng-seed').run(['$templateCache',function($templateCache){
$templateCache.put('./app/modules/userProfile/components/userProfile/userProfileTpl.html', '<nav class="navbar"><div class="container"><div class="navbar-header"> <img src="app/modules/userProfile/images/avatar-fallback.png" class="avatar-fallback"/></div><div id="navbar"><ul class="nav navbar-nav"><li><a ui-sref="userProfile.info" ui-sref-active="active">Info</a></li><li><a ui-sref="userProfile.settings" ui-sref-active="active">Settings</a></li></ul></div></div></nav><div class="container"><div ui-view="userProfile"></div> appVersion: {{vm.appVersion}}</div>');
$templateCache.put('./app/modules/userProfile/components/userProfileInfo/userProfileInfoTpl.html', 'user profile info "{{vm.userName || \'unknown\'}}"');

}]);

