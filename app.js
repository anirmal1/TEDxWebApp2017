angular.module('tedx-app', [])
	.controller('AppController', function($scope) {
		$scope.sections = [{text:'Schedule', content:'schedule-scroll'}, 
						   {text:'Speakers', content:'speakers-scroll'}, 
						   {text:'Activities', content: 'activities-scroll'}];

	})
	.controller('ScheduleController', function($scope) {
		$scope.speakers = [{text:'Speaker1'}, {text: 'Speaker2'}];
	});
