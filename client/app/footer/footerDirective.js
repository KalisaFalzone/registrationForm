angular.module('regForm')

.directive('footer', [function(){

  return {
    restrict: 'E',
    replace: true,
    scope: {},
    templateUrl: 'app/footer/footerTemplate.html',
    link: function(scope, element, attributes) {
    }
  };
}]);