angular.module('tedx-app', [])
	.controller('AppController', function($scope) {
		$scope.sections = [{text:'Schedule'}, {text:'Speakers'}, {text:'Activities'}];
	});
