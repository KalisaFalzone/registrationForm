angular.module('regForm')

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/registrationForm");
  //
  // Now set up the states
  $stateProvider
    .state('registrationForm', {
      url: "/registrationForm",
      controller: 'registrationFormController as controller',
      templateUrl: "app/registrationForm/registrationForm.html"
    })
}]);