(function() {
window.onload = function() {
	var person = getPerson();
	document.title = person;


};

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
		return 'Willian Zhou';
	}
}


})();
