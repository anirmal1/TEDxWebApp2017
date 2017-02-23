angular.module('tedx-app', [])
	.controller('AppController', function($scope) {
		$scope.sections = [{text:'Schedule'}, {text:'Speakers'}, {text:'Activities'}];

	})
	.controller('ScheduleController', function($scope) {
		$scope.speakers = [{text:'Speaker1'}, {text: 'Speaker2'}];
	});
