// JavaScript file for schedule.html

(window.onload = function() {
	displaySpeakersList();

	function displaySpeakersList() {
		var speakers = ['Speaker1', 'Speaker2', 'Speaker3', 'Entertainment1', 'Speaker4', 'Speaker5', 'Speaker6', 'Entertainment2'];
		speakerList = document.getElementById('speaker-page-list');

		for (var i = 0; i < speakers.length; i++) {
			var divSpeaker = document.createElement("div");
			divSpeaker.classList.add("speaker-div-schedule");
			var speakerName = document.createElement("h1");
			speakerName.classList.add("speaker-title");
			speakerName.innerHTML = speakers[i];
			var trapezoid = document.createElement("div");
			trapezoid.classList.add("speaker-trapezoid");
			divSpeaker.appendChild(speakerName);
			divSpeaker.appendChild(trapezoid);
			speakerList.appendChild(divSpeaker);
		}
	
	}

});

