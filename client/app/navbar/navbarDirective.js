angular.module('regForm')

.directive('navbar', [function(){

  return {
    restrict: 'E',
    replace: true,
    scope: {},
    templateUrl: 'app/navbar/navbarTemplate.html',
    link: function(scope, element, attributes) {
    }
  };
}]);