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
            when('/subjects', {
                templateUrl: 'partials/subject-list.html',
                controller: 'SubjectList'
            }).
            when('/subjects/:subjectId', {
                templateUrl: 'partials/subject-detail.html',
                controller: 'SubjectDetail'
            }).
            when('/elements', {
                templateUrl: 'partials/element-list.html',
                controller: 'ElementList'
            }).
            when('/elements/:elementId', {
                templateUrl: 'partials/element-detail.html',
                controller: 'ElementDetail'
            }).
            otherwise({
                redirectTo: '/subjects'
            });
    }]);
