angular.module('regForm')

.controller('registrationFormController', ['$scope', 'localizationFactory', function($scope, localizationFactory){

  $scope.currentLanguage = {};
  $scope.loadLanguage = localizationFactory.loadLanguage

  $scope.loadLanguage(navigator.language)
  .then(function(languageData) {
    $scope.allLanguages = languageData.allLanguages;
    $scope.currentLanguage = languageData.currentLanguage
  });

  $scope.$on('japanese', function () {
    $scope.currentLanguage = $scope.allLanguages.ja;
  });

  $scope.$on('english', function () {
    $scope.currentLanguage = $scope.allLanguages.en-us;
  });

  $scope.checked = false;

  $scope.switchCheck = function() {
    $scope.checked = !$scope.checked;
  }

}]);