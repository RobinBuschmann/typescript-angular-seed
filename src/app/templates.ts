import "./app"; angular.module('ts-ion-seed').run(['$templateCache',function($templateCache){
$templateCache.put('./app/modules/userProfile/components/userProfile/userProfileTpl.html', '<ion-view><ion-tabs class="tabs-icon-top tabs-positive"><ion-tab title="Info" icon="ion-information" href="#/userProfile/info"><ion-nav-view name="userProfileInfo"></ion-nav-view></ion-tab><ion-tab title="Settings" icon="ion-settings" href="#/userProfile/settings"><ion-nav-view name="userProfileSettings"></ion-nav-view></ion-tab></ion-tabs></ion-view>');
$templateCache.put('./app/modules/userProfile/components/userProfileInfo/userProfileInfoTpl.html', '<ion-view><ion-content class="has-header tabs-content"> user profile info "{{vm.userName || \'unknown\'}}"</ion-content></ion-view>');

}]);

