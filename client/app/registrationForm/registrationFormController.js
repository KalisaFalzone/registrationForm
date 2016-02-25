angular.module('regForm')

.controller('registrationFormController', ['$scope', 'localizationFactory', function($scope, localizationFactory){

  $scope.currentLanguage = {};

  localizationFactory.loadLanguage(navigator.language)
  .then(function(localization) {
    $scope.currentLanguage = localization;
  });

}]);