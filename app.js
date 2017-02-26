// Angular Javascript file

angular.module('tedx-app', [])
	.controller('AppController', function($scope) {
		// Overall home page controller
		$scope.sections = [{text:'Schedule', content:'schedule-scroll', insert:'ScheduleSection'}, 
						   {text:'Speakers', content:'speakers-scroll', insert:'SpeakerSection'}, 
						   {text:'Activities', content: 'activities-scroll', insert:'ActivitySection'}];

	})
	.controller('ScheduleController', function($scope) {
		// Schedule page controller
		$scope.speakers = [{text:'Speaker1'}, {text: 'Speaker2'}];
	});
