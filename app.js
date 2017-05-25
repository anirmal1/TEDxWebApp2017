// JavaScript file for HomePage

(function() {

window.onload = function() {
	//window.localStorage.clear();
	// Interactive section on the home page
	addInteractiveHeading();

	// Schedule information for home page
	addHomePageScheduleInfo();

	// Speaker information for home page
	addSpeakerImages();
	
	// Activities information for home page
	// TODO ask pr team (?) about what should go here
};

function addInteractiveHeading() {
	var interactive = document.getElementById('interactive');
	var interactiveHeading = document.createElement('form');

	var promptText = {steve : 'I am proud to be ', 
										peregrine : 'Novelty is ',
										erin : 'I can ', 
										will : 'I can use 5 seconds to ',
										// rachel : 'I can make people feel ',
										kelly : 'Changing our perspective is ',
										jasmin : 'Words shape how we ',
										jeannie : 'Being a good leader means ',
										courtney : 'I can bring creative purpose to '};
	var promptFiles = {steve : 'steve', 
										peregrine : 'peregrine',
										erin : 'erin', 
										will : 'will',
										// rachel : 'rachel',
										kelly : 'kelly',
										jasmin : 'jasmin',
										jeannie : 'jeannie',
										courtney : 'courtney'};

	var currTime = new Date();
	var hours = currTime.getHours();
	var minutes = currTime.getMinutes();
	var chosenPrompt = '';

	if(window.localStorage.getItem('steve') == null) {
		populateLocalStorage();
	}

	// (1:30 -> h: 13, m: 30), (2:30 -> h: 14, m: 30), ...
	if (hours == 11 && minutes >= 30 && minutes <= 40) { // 11:30-11:40
		chosenPrompt = "steve";
	} else if (hours == 11 && minutes >= 45 && minutes <= 55) { // 11:45-11:55
		chosenPrompt = "peregrine";
	} else if (hours == 12 && minutes >= 0 && minutes <= 10) { // 12:00-12:10
		chosenPrompt = "erin";
	} else if (hours == 13 && minutes >= 25 && minutes <= 35) { // 1:25-1:35
		chosenPrompt = "will";
	} /* else if (hours == 13 && minutes >= 40 && minutes <= 50) { // 1:40-1:50
		chosenPrompt = "rachel";
	} */ else if (hours == 14 && minutes >= 10 && minutes <= 20) { // 2:10-2:20
		chosenPrompt = "kelly";
	} else if (hours == 15 && minutes >= 5 && minutes <= 15) { // 3:05-3:15
		chosenPrompt = "jasmin";
	} else if (hours == 15 && minutes >= 20 && minutes <= 30) { // 3:20-3:30
		chosenPrompt = "jeannie";
	} else if (hours == 15 && minutes >= 35 && minutes <= 45) { // 3:35-3:45
		chosenPrompt = "courtney";
	} else {
		chosenPrompt = "erin";
	}

	if (chosenPrompt != null) {
		if (window.localStorage.getItem(chosenPrompt) != 'true') {
			interactiveHeading.classList.add('interactive-heading');
			var word = window.localStorage.getItem(chosenPrompt);
			var promptPart = document.createElement('span');
			promptPart.innerHTML = promptText[chosenPrompt];
			var inp = document.createElement('span');
			inp.innerHTML = word;
			interactiveHeading.appendChild(promptPart);
			interactiveHeading.appendChild(inp);
			inp.style.fontStyle = 'italic';
			inp.style.color = '#E62B1E';
			interactive.appendChild(interactiveHeading);
			chosenPrompt = null;	
		}
	}

	if (chosenPrompt != null) {
		interactiveHeading.classList.add('interactive-heading');
		interactiveHeading.innerHTML = promptText[chosenPrompt];
		interactiveHeading.onsubmit = function() {
			sendYesAndData(promptFiles[chosenPrompt]);
			var word = inputPart.value;
			var loader = document.createElement('div');
			loader.style.display = 'inline-block';
			loader.classList.add('loader');
			interactiveHeading.appendChild(loader);
			setTimeout( function() {
				loader.parentNode.removeChild(loader);
				interactiveHeading.innerHTML = '';
				var promptPart = document.createElement('span');
				promptPart.innerHTML = promptText[chosenPrompt];
				var inp = document.createElement('span');
				inp.innerHTML = word;
				interactiveHeading.appendChild(promptPart);
				interactiveHeading.appendChild(inp);
				inp.style.fontStyle = 'italic';
				inp.style.color = '#E62B1E';
				window.localStorage.setItem(chosenPrompt, word);
			},500);
			return false;
		};

		var inputPart = document.createElement('input');
		inputPart.setAttribute('type', 'text');
		inputPart.setAttribute('name', 'yesAnd');
		inputPart.setAttribute('id', 'yesAnd');
		inputPart.setAttribute('size', '5');
		inputPart.setAttribute('placeholder', 'your ideas');
		inputPart.setAttribute('autocapitalize', 'off');
		inputPart.classList.add('homepage-input');
		interactiveHeading.appendChild(inputPart);
		interactive.appendChild(interactiveHeading);
	}
}

function populateLocalStorage() {
	s = window.localStorage;
	s.setItem('steve', true);
	s.setItem('peregrine', true);
	s.setItem('erin', true);
	s.setItem('will', true);
	// s.setItem('rachel', true);
	s.setItem('kelly', true);
	s.setItem('jasmin', true);
	s.setItem('jeannie', true);
	s.setItem('courtney', true);
}

function sendYesAndData(chosenPrompt) { 
	var inputValue = document.getElementById('yesAnd').value;
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
						console.log(xhr.responseText);
        }
    };

	xhr.open('GET', 'word_cloud_data.php?prompt=' + chosenPrompt + '&word=' + inputValue, true);
	xhr.send();
}


function addHomePageScheduleInfo() {
	var scheduleScrollSection = document.getElementById('schedule-blocks');
	var events = ['Introduction', 'Performance', 'Steven Matley', 'Peregrine Church', 'Erin Jones', 'Lunch', 'William Zhou', 'Performance', 'Kelly Oglivie', 'Intermission', 'Jasmin Samy', 'Jeannie Berwick', 'Courtney Sheehan', 'Performance', 'Closing'];
	var times = ['11:00', '11:15', '11:20', '11:35', '11:50', '12:10', '1:15', '1:45', '2:00', '2:25', '2:55', '3:10', '3:25', '3:40', '3:50']
	
	boxWidth = 400;
	scheduleScrollSection.style.width = ((boxWidth + 4) * events.length) + "px" // hard coded sorry bleh
	for (var i = 0; i < events.length; i++) {
		var eventBox = document.createElement('div');
		eventBox.style.width = boxWidth + "px";
		eventBox.classList.add('event-box');

		var table = document.createElement('div');
		table.style.display = 'table';
		
		var speakerText = document.createElement('p');
		speakerText.innerHTML = events[i];
		speakerText.classList.add('event-box-text');
		var timeText = document.createElement('p');
		timeText.innerHTML = times[i];
		timeText.classList.add('event-box-time');
	
		var speakerContainer = document.createElement('div');
		speakerContainer.style.display = 'table-row';
		speakerContainer.appendChild(speakerText);
		eventBox.appendChild(speakerContainer);

		var timeContainer = document.createElement('div');
		timeContainer.style.display = 'table-row';
		timeContainer.append(timeText);
		eventBox.appendChild(timeContainer);

		scheduleScrollSection.appendChild(eventBox); 
	};
}

function addSpeakerImages() {
	var xhr = new XMLHttpRequest();
	xhr.onload = processSpeakerData;
	xhr.open('GET', 'data/speakers.json', true);
	xhr.send();
}

function processSpeakerData() {
	var data = JSON.parse(this.responseText);
	var speakerScrollSection = document.getElementById('speaker-blocks');
	var speakerNames = data.speakerNames;
	var totalWidth = 0;
	for (var name in speakerNames) {
		var speakerBox = document.createElement('div');
		speakerBox.classList.add('speakers-scroll-section');
		var imageBlock = document.createElement('img');
		var path = speakerNames[name].image;
		imageBlock.setAttribute('src', 'assets/Speakers2017/' + path);

		totalWidth += 274; // HARDCODED VALUE bleh
		var link = document.createElement('a');
		link.setAttribute('href', 'speakers.html');
		link.appendChild(imageBlock);
		speakerBox.appendChild(link);
		speakerScrollSection.appendChild(speakerBox);
	}
	speakerScrollSection.style.width = totalWidth + 'px'; 
}

})();
