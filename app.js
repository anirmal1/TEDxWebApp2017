// Angular Javascript file

angular.module('tedx-app', [])
	.controller('AppController', function($scope) {
		// Overall home page controller
		$scope.sections = [{text:'Schedule', content:'schedule-scroll', controller:'ScheduleSectionController'}, 
						   {text:'Speakers', content:'speakers-scroll', controller:'SpeakerSectionController'}, 
						   {text:'Activities', content: 'activities-scroll', controller:'ScheduleController'}];

	})
	.controller('ScheduleSectionController', function($scope) {
		$scope.items = [{time:'1:30pm', currEvent:'Speaker1'},
								{time:'2:00pm', currEvent:'Speaker2'},
								{time:'2:30pm', currEvent:'Speaker3'},
								{time:'3:00pm', currEvent:'Entertainment1'},
								{time:'3:30pm', currEvent:'Speaker4'},
								{time:'4:00pm', currEvent:'Speaker5'},
								{time:'4:30pm', currEvent:'Entertainment2'}]; // Placeholder values
	})
	.controller('SpeakerSectionController', function($scope) {
		$scope.items = []
	})
	.controller('ActivitiesSectionController', function($scope) {

	})
	.controller('ScheduleController', function($scope) {
		// Schedule page controller
		$scope.speakers = [{text:'Speaker1'}, {text: 'Speaker2'}];
	});
