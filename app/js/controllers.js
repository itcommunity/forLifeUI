'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);

var forLifeControllers = angular.module('forLifeControllers', ['ngSanitize']);

forLifeControllers.controller('ElementList', ['$scope', 'Element', function($scope, Element){
    $scope.elements = Element.query();
}])

forLifeControllers.controller('ElementDetail', ['$scope', '$routeParams', 'Element',
    function($scope, $routeParams, Element) {
        $scope.element = Element.get({elementId: $routeParams.elementId});
    }]);

forLifeControllers.controller('SubjectList', ['$scope', 'Subject', function($scope, Subject){
    $scope.subjects = Subject.query();
}])

//forLifeControllers.controller('SubjectElementList', ['$scope', '$routeParams', 'SubjectElements',
forLifeControllers.controller('SubjectElementList', ['$scope', '$routeParams', 'Subject',
    //function($scope, $routeParams, SubjectElements) {
    function($scope, $routeParams, Subject) {
        $scope.getElements=function(id) {
            //$scope.elements = SubjectElements.query({subjectId: id});
            $scope.elements = Subject.elements({subjectId: id});
        }
    }]);

forLifeControllers.controller('SubjectDetail', ['$scope', '$routeParams', 'Subject',
    //function($scope, $routeParams, SubjectElements) {
    function($scope, $routeParams, Subject) {
            $scope.subject=Subject.get({subjectId:$routeParams.subjectId})
            $scope.elements = Subject.elements({subjectId: $routeParams.subjectId});
    }]);

forLifeControllers.controller('TestController', ['$scope', '$routeParams',
    function($scope, $routeParams) {
        //$scope.elements = SubjectElements.get({subjectId: $routeParams.subjectId});
        //$scope.name=$scope.id;
        $scope.test=function(id){
            $scope.name=id;
        }
    }]);
