angular.module('components', [])
	.directive('homesection', function() {
		return {
			restrict: 'E',
			transclude: true,
			scope: { type: '@' },
			controller: function($scope, $element) {
				text = type; // THIS IS A FILLER TO GET IT TO COMPILE
			},
			template:'', 
			replace: true
			// TODO need to have some sort of function that distinguishes content based on the type
		};
	});

