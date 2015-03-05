'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);


var forLifeServices = angular.module('forLifeServices', ['ngResource']);

forLifeServices.factory('Article', ['$resource', function($resource){
    return $resource('articles/:articleId.json', {}, {query: {method:'GET', params:{articleId:'articles'}, isArray:true}
    });
}]);