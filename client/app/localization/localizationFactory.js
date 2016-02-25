angular.module('regForm')

.factory('localizationFactory', ['$http', function($http){

  var currentLanguage = null;
  var allLanguages = {};

  function loadLanguage(language) {
    language = language.toLowerCase();

    currentLanguage = allLanguages[language] || allLanguages["en-us"];

    if (currentLanguage) {
      return $q(function(resolve){ resolve(currentLanguage); });
    }

    return $http({
      method: 'GET',
      url: 'app/localization/translation.json'
    }).then(function successCallback(response) {
      allLanguages = response.data;
      console.log(allLanguages);
      currentLanguage = allLanguages[language] || allLanguages["en-us"];
      return currentLanguage;
    }, function errorCallback(response) {
      console.log('Error reading translation json file');
    });
  }

  function translateJapanese() {
    console.log('switch to Japanese');
  }

  return {
    currentLanguage: currentLanguage,
    loadLanguage: loadLanguage,
    translateJapanese: translateJapanese
  }

}]);