'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatAnimations',

  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);

var forLifeApp = angular.module('forLifeApp', [
    'ngRoute',
    //'phonecatAnimations',

    'forLifeControllers',
    //'phonecatFilters',
    'forLifeServices'
]);

forLifeApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/articles', {
                templateUrl: 'partials/article-list.html',
                controller: 'articleList'
            }).
            otherwise({
                redirectTo: '/articles'
            });
    }]);
