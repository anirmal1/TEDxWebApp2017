// JavaScript file for schedule.html

(window.onload = function() {
	displaySpeakersList();

	function displaySpeakersList() {
		var speakers = ['Introduction', 'Performance', 'Steven Matley', 'Peregrine Church', 'Erin Jones', 'Lunch', 'William Zhou', 'Performance', 'Kelly Oglivie', 'Intermission', 'Jasmin Samy', 'Jeannie Berwick', 'Courtney Sheehan', 'Performance', 'Closing'];
		var times = ['11:00', '11:15', '11:20', '11:35', '11:50', '12:10', '1:15', '1:30', '1:45', '2:00', '2:25', '2:55', '3:10', '3:40', '3:50']
		var pics = [null, null, 'steven-matley.jpg', 'peregrine-church.jpg', 'erin-jones.jpg', null, 'william-zhou.jpg', null, 'kelly-ogilvie.jpg', null, 'jasmin-samy.jpg', 'jeannie-berwick.jpg', 'courtney-sheehan.png', null, null];
		var offset = [null, null, -140, -130, -110, null, -130, null, -230, null, -140, -240, -250, null, null];	
		var links = [null, null, 'matley', 'church', 'jones', null, 'zhou', null, 'ogilvie', null, 'samy', 'berwick', 'sheehan', null, null];

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

			if (pics[i] != null) {
				var imgPath = 'assets/Speakers2017/' + pics[i];
				divSpeaker.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' + imgPath + ')';
				divSpeaker.style.backgroundPositionY = offset[i] + 'px';
				divSpeaker.style.backgroundSize = '80%';
				time.style.color = '#3a3a3a';
				var link = document.createElement('a');
				link.setAttribute('href', 'bio_schedule.html?speaker=' + links[i]);
				link.style.display = 'block';
				link.appendChild(divSpeaker);
				speakerList.appendChild(link);
			} else {
				speakerList.appendChild(divSpeaker);
			}
		}
	
	}

});

