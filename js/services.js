var musicService = angular.module('musicService', []);

musicService.config(function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

musicService.factory('getInfo', ['$http', function ($http) {
	var url = 'http://api.deezer.com/search?q=';
	var urlEnd = '&output=jsonp&callback=JSON_CALLBACK';


	return {
			search: function(artist) {
				return $http.jsonp(url + artist + urlEnd);
			}      
    };
}]);