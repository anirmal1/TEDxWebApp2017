// JavaScript file for HomePage

(function() {

window.onload = function() {
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

	// TODO replace these with the actual prompts (these are placeholders)
	var promptText = {prompt1 : 'prompt 1 ', 
										prompt2 : 'prompt 2 ',
										prompt3 : 'prompt 3 ', 
										prompt4 : 'prompt 4 ',
										prompt5 : 'prompt 5 '};
	var promptFiles = {prompt1 : 'prompt1', 
										prompt2 : 'prompt2',
										prompt3 : 'prompt3', 
										prompt4 : 'prompt4',
										prompt5 : 'prompt5'};

	var currTime = new Date();
	var hours = currTime.getHours();
	var minutes = currTime.getMinutes();
	var chosenPrompt = '';

	// TODO replace these with the actual times (these are placeholders)
	// (1:30 -> h: 13, m: 30), (2:30 -> h: 14, m: 30), ...
	if ((hours == 13 && minutes >= 30) || (hours == 14 && minutes < 30)) {
		chosenPrompt = "prompt1";
	} else if ((hours == 14 && minutes >= 30) || (hours == 15 && minutes < 30)) {
		chosenPrompt = "prompt2";
	} else if ((hours == 15 && minutes >= 30) || (hours == 16 && minutes < 30)) {
		chosenPrompt = "prompt3";
	} else if ((hours == 16 && minutes >= 30) || (hours == 17 && minutes < 30)) {
		chosenPrompt = "prompt4";
	} else {
		chosenPrompt = "prompt5";
	}

	interactiveHeading.classList.add('interactive-heading');
	interactiveHeading.innerHTML = promptText[chosenPrompt]; //'yes and ';
	interactiveHeading.onsubmit = function() {
		sendYesAndData(promptFiles[chosenPrompt]); //sendYesAndData();
	};

	var inputPart = document.createElement('input');
	inputPart.setAttribute('type', 'text');
	inputPart.setAttribute('name', 'yesAnd');
	inputPart.setAttribute('id', 'yesAnd');
	inputPart.setAttribute('size', '5');
	inputPart.classList.add('homepage-input');
	interactiveHeading.appendChild(inputPart);
	interactive.appendChild(interactiveHeading);
}

function sendYesAndData(chosenPrompt) { // function sendYesAndData() {
	var inputValue = document.getElementById('yesAnd').value;
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            console.log(xhr.responseText);
        }
    };

	xhr.open('GET', 'word_cloud_data.php?prompt=' + chosenPrompt + '&input=' + inputValue, true);
	xhr.send();
}


function addHomePageScheduleInfo() {
	var scheduleScrollSection = document.getElementById('schedule-blocks');
	var events = ['Speaker1', 'Speaker2', 'Speaker3', 'Enter1', 'Speaker4', 'Speaker5', 'Speaker6', 'Enter2'];
	boxWidth = 300;
	scheduleScrollSection.style.width = ((boxWidth + 4) * events.length) + "px" // hard coded sorry bleh
	events.forEach(function(eventItem) {
		var eventBox = document.createElement('div');
		eventBox.style.width = boxWidth + "px";
		eventBox.classList.add('event-box');
		var speakerText = document.createElement('p');
		speakerText.innerHTML = eventItem;
		speakerText.classList.add('event-box-text');
		eventBox.appendChild(speakerText);
		scheduleScrollSection.appendChild(eventBox); 
	});
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
		speakerBox.appendChild(imageBlock);
		speakerScrollSection.appendChild(speakerBox);
	}
	speakerScrollSection.style.width = totalWidth + 'px'; 
}

})();
