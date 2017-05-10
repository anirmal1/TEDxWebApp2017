(function() {
window.onload = function() {
	var person = getPerson();
	document.title = person;
	console.log(person);
	addBio(person);

};

function addBio(person) {
	var xhr = new XMLHttpRequest();
	xhr.onload = function() {
		processBioData(person, this.responseText);
	};
	xhr.open('GET', 'data/speakers.json', true);
	xhr.send();
}

function processBioData(person, responseText) {
	var data = JSON.parse(responseText);
	var speakerNames = data.speakerNames;
	var personInfo = speakerNames[person];

	var headingDiv = document.getElementById('bio-header');
	headingDiv.innerHTML = person;

	var imageDiv = document.getElementById('speaker-bio-image');
	var path = personInfo.image;
	var image = document.createElement('img');
	image.setAttribute('src', 'assets/Speakers2017/' + path);
	image.classList.add('bio-image'); 
	imageDiv.appendChild(image);

	var bioDiv = document.getElementById('bio-text');
	var bio = personInfo.bio;
	var para = document.createElement('p');
	para.classList.add('para-class');
	para.innerHTML = bio;
	bioDiv.appendChild(para);
}

function getPerson() {
	var query = window.location.search.substring(1);
	var parts = query.split('=');
	var link = parts[1];
	if (link == 'sheehan') {
		return 'Courtney Sheehan';
	} else if (link == 'jones') {
		return 'Erin Jones';
	} else if (link == 'samy') {
		return 'Jasmin Samy';
	} else if (link == 'berwick') {
		return 'Jeannie Berwick';
	} else if (link == 'ogilvie') {
		return 'Kelly Ogilvie';
	} else if (link == 'church') {
		return 'Peregrine Church';
	} else if (link == 'marshall') {
		return 'Rachel Marshall';
	} else if (link == 'matley') {
		return 'Steven Matley';
	} else { // 'zhou'
		return 'William Zhou';
	}
}


})();
