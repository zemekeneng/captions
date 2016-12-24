'use strict';

angular.module('captions', [
  'ngRoute'
])


.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/:person', {
    templateUrl: 'view.html',
    controller: 'PersonCtrl'
  });
}])

 .controller('PersonCtrl', function($scope, $routeParams) {
     $scope.image = 'img/'+$routeParams.person+'.jpg';
     $scope.caption = $routeParams.caption;
     console.log($routeParams)
 })