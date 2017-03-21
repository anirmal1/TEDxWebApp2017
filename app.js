// JavaScript file for HomePage

(window.onload = function() {
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
