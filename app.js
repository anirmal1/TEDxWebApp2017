// Angular Javascript file

angular.module('tedx-app', [])
	.controller('AppController', function($scope) {
		// Overall home page controller
		$scope.sections = [{text:'Schedule', content:'schedule-scroll', items:'schedule'}, 
						   {text:'Speakers', content:'speakers-scroll', items:'speakers'}, 
						   {text:'Activities', content: 'activities-scroll', items:'activities'}];

	})
	.controller('HomeSectionController', function($scope) {
		$scope.init = function(type) {
			if (type === 'schedule') {
				$scope.items = [{time:'1:30pm', currEvent:'Speaker1'},
								{time:'2:00pm', currEvent:'Speaker2'},
								{time:'2:30pm', currEvent:'Speaker3'},
								{time:'3:00pm', currEvent:'Entertainment1'},
								{time:'3:30pm', currEvent:'Speaker4'},
								{time:'4:00pm', currEvent:'Speaker5'},
								{time:'4:30pm', currEvent:'Entertainment2'}]; // Placeholder values
				
			} 
			if (type == 'speakers') {
				$scope.items = []
			} 
			if (type == 'activities') {
				$scope.items = []
			}
		}
	})
	.controller('ScheduleController', function($scope) {
		// Schedule page controller
		$scope.speakers = [{text:'Speaker1'}, {text: 'Speaker2'}];
	});
