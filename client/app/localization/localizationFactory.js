angular.module('regForm')

.factory('localizationFactory', ['$rootScope', '$http', '$q', function($rootScope, $http, $q){

  var currentLanguage = null;
  var allLanguages = {};

  function loadLanguage(language) {
    language = language.toLowerCase();
    currentLanguage = allLanguages[language] || allLanguages['en-us'];

    if (currentLanguage) {
      return $q(function(resolve){ resolve(currentLanguage); });
    }

    return $http({
      method: 'GET',
      url: 'app/localization/translation.json'
    }).then(function successCallback(response) {
      allLanguages = response.data;
      currentLanguage = allLanguages[language] || allLanguages['en-us'];
      $rootScope.$broadcast('languageSet');
      return {allLanguages: allLanguages, currentLanguage: currentLanguage};
    }, function errorCallback(response) {
      console.log('Error reading translation json file');
    });
  }

  function changeLanguage(language) {
    currentLanguage = allLanguages[language];
    if (language === 'ja') {
      $rootScope.$broadcast('japanese');
    }
    if (language === 'en-us') {
      $rootScope.$broadcast('english');
    }
  }

  return {
    currentLanguage: currentLanguage,
    loadLanguage: loadLanguage,
    changeLanguage: changeLanguage,
    allLanguages: allLanguages
  }

}]);