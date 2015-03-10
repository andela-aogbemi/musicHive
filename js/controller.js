var musicHive = angular.module('musicHive', ['musicService', 'ngSanitize']);
musicHive.controller('musicController', ['$scope', 'getInfo', '$http', '$sce', function($scope, getInfo, $http, $sce) {
	$scope.fetchArtist = function() {

		var artistInput = $scope.artist;
		getInfo.search(artistInput).success(function(data){
				$scope.songs = data.data;
				angular.forEach(data.data, function(song){
						song.preview = $sce.trustAsResourceUrl(song.preview);
					}).error(function (data) {
						$scope.error = 'data';
					});
		});
	}
}]);



