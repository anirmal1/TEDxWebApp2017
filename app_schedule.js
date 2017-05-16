// JavaScript file for schedule.html

(window.onload = function() {
	displaySpeakersList();

	function displaySpeakersList() {
		var speakers = ['Introduction', 'Performance', 'Steven Matley', 'Peregrine Church', 'Erin Jones', 'Lunch', 'William Zhou', 'Rachel Marshall', 'Performance', 'Kelly Oglivie', 'Intermission', 'Jasmin Samy', 'Jeannie Berwick', 'Courtney Sheehan', 'Performance', 'Closing'];
		var times = ['11:00', '11:15', '11:20', '11:35', '11:50', '12:10', '1:15', '1:30', '1:45', '2:00', '2:25', '2:55', '3:10', '3:25', '3:40', '3:50']
	
		speakerList = document.getElementById('speaker-page-list');

		for (var i = 0; i < speakers.length; i++) {
			var divSpeaker = document.createElement("div");
			divSpeaker.classList.add("speaker-div-schedule");
			var speakerName = document.createElement("h1");
			speakerName.classList.add("speaker-title");
			speakerName.innerHTML = speakers[i];
			var time = document.createElement('h2');
			time.classList.add('schedule-time');
			time.innerHTML = times[i];
			var trapezoid = document.createElement("div");
			trapezoid.classList.add("speaker-trapezoid");
			divSpeaker.appendChild(speakerName);
			trapezoid.appendChild(time);
			divSpeaker.appendChild(trapezoid);
			speakerList.appendChild(divSpeaker);
		}
	
	}

});

