angular.module('regForm')

.controller('footerController', ['$scope', 'localizationFactory', function($scope, localizationFactory) {
  $scope.loadLanguage = localizationFactory.loadLanguage;
  $scope.changeLanguage = localizationFactory.changeLanguage;
  $scope.currentLanguage;
  $scope.allLanguages;

  $scope.$on('languageSet', function () {
    $scope.allLanguages = localizationFactory.allLanguages;
  });

  $scope.$on('japanese', function () {
    $scope.currentLanguage = $scope.allLanguages.ja;
  });

  $scope.$on('english', function () {
    $scope.currentLanguage = $scope.allLanguages.en-us;
  });
}])

.directive('footer', [function(){

  return {
    restrict: 'E',
    replace: true,
    scope: {},
    templateUrl: 'app/footer/footerTemplate.html',
    controller: 'footerController',
    link: function(scope, element, attributes) {
    }
  };
}]);