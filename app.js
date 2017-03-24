// JavaScript file for HomePage

(window.onload = function() {
	// Interactive section on the home page
	var interactive = document.getElementById('interactive');
	// TEMPORARY:: just have "yes and ___", but change it at different times to display other things
	var interactiveHeading = document.createElement('form');
	interactiveHeading.classList.add('interactive-heading');
	interactiveHeading.innerHTML = 'yes and ';
	var inputPart = document.createElement('input');
	inputPart.setAttribute('type', 'text');
	inputPart.setAttribute('name', 'yesAnd');
	inputPart.setAttribute('size', '5');
	inputPart.classList.add('homepage-input');
	interactiveHeading.appendChild(inputPart);
	interactive.appendChild(interactiveHeading);

	// Schedule information for home page
	var scheduleScrollSection = document.getElementById('schedule-blocks');
	var events = ['Speaker1', 'Speaker2', 'Speaker3', 'Entertainment1', 'Speaker4', 'Speaker5', 'Speaker6', 'Entertainment2'];
	boxWidth = 300;
	scheduleScrollSection.style.width = (boxWidth * events.length) + "px"
	events.forEach(function(eventItem) {
		var eventBox = document.createElement('div');
		eventBox.style.width = boxWidth + "px";
		eventBox.classList.add('event-box');
		var speakerText = document.createElement('p');
		speakerText.innerHTML = eventItem;
		speakerText.classList.add('event-box-text');
		eventBox.appendChild(speakerText);
		scheduleScrollSection.appendChild(eventBox); // can't figure out why entertainment 2 isnt showing :(
	});

	// Speaker information for home page

	// Activities information for home page

});
