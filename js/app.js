'use strict';

angular.module('captions', [
  'ngRoute'
])


.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/:person', {
    templateUrl: 'captions/view.html',
    controller: 'PersonCtrl'
  });
}])

 .controller('PersonCtrl', function($scope, $routeParams) {
     $scope.image = $routeParams.person;
     $scope.caption = $routeParams.caption;
     console.log($routeParams)
 })