'use strict';

/* Services */

var baseUrl='http://localhost:8080/api'

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);


var forLifeServices = angular.module('forLifeServices', ['ngResource']);

forLifeServices.factory('Element', ['$resource', function($resource){
    return $resource(baseUrl+'/elements/:elementId', {}, {query: {method:'GET', params:{elementId:''}, isArray:true}
    });
}]);

forLifeServices.factory('Subject', ['$resource', function($resource){
    return $resource(baseUrl+'/subjects/:subjectId', {}, {
        query: {method:'GET', isArray:true},
        elements: {method:'GET', isArray:true, url: baseUrl+'/subjects/:subjectId/elements'}
    });
}]);

//forLifeServices.factory('SubjectElements', ['$resource', function($resource){
//    return $resource(baseUrl+'/subjects/:subjectId/elements', {}, {query: {method:'GET', isArray:true}});
//}]);
