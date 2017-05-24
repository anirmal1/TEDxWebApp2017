(function() {
window.onload = function() {
	addSpeakerImages();
};

function addSpeakerImages() {
	var xhr = new XMLHttpRequest();
	xhr.onload = processSpeakerData;
	xhr.open('GET', 'data/speakers.json', true);
	xhr.send();
}

function processSpeakerData() {
	var data = JSON.parse(this.responseText);
	var speakerDiv = document.getElementById('speaker-images');
	var speakerNames = data.speakerNames;
	for (var name in speakerNames) {
		var image = document.createElement('img');
		image.classList.add('speaker-page-image');
		var path = speakerNames[name].image;
		image.setAttribute('src', 'assets/Speakers2017/' + path);
		var nameCaption = document.createElement('div');
		nameCaption.classList.add('name-caption');
		nameCaption.innerHTML = name;
		var link = document.createElement('a');
		var linkPath = speakerNames[name].link;
		link.setAttribute('href', 'bio.html?speaker='+linkPath);
		link.setAttribute('id', name);
		link.classList.add('speaker-page-image');
		var temp = document.createElement('div');
		temp.appendChild(image);
		temp.appendChild(nameCaption);
		link.appendChild(temp);
		speakerDiv.appendChild(link);
	}
}

})();
