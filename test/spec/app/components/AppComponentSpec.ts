///<reference path="../../typings/tsd.d.ts"/>

describe('AppComponent', () => {

  var expect = chai.expect;
  var SOME_STRING = 'elisa';
  var SOME_NUMBER = 1234;
  var SOME_LISTENER = sinon.spy();

  var $scope;
  var componentElement = null;
  var componentController = null;

  beforeEach(done => {

    System.import('app/bootstrap')
      .then(function () {

        angular.mock.module('ts-ion-seed');

        done();
      });
  });

  beforeEach(angular.mock.inject(function ($controller, $rootScope, $compile) {

    // prepare scope
    $scope = $rootScope.$new();
    $scope.someString = SOME_STRING;
    $scope.someListener = SOME_LISTENER;
    $scope.someNumber = SOME_NUMBER;

    // prepare Component for spies
    // (wraps original functions in a sinon spy)
    // Component.prototype.onPreLink = sinon.spy(Component.prototype.onPreLink);
    // Component.prototype.onPostLink = sinon.spy(Component.prototype.onPostLink);
    // Component.prototype.onDestroy = sinon.spy(Component.prototype.onDestroy);

    // create and compile component element
    // componentElement = angular.element(`
    //                 <component some-attribute="someString"
    //                            another-attribute="someNumber"
    //                            some-listener="someListener($someAttribute)"></component>`);
    // $compile(componentElement)($scope);
    // $rootScope.$digest();

    // retrieve component controller instance from element
    // componentController = componentElement.controller("component");

  }));

  describe('attribute', () => {

    it('should be a string', function () {

      expect('str').to.a('string');
    });
  });

});



