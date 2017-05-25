window.onload = function() {
	var selector = document.getElementById('select');
	selector.onchange = showData;
}

function showData() {
	var value = document.getElementById('select').value;
	var text = document.getElementById('words');
	text.innerHTML = '';
	if (value != 'none') {
		var xhr = new XMLHttpRequest();
		xhr.onload = addWords;
		xhr.open('GET', 'data/word_cloud_data_' + value + '.txt', true);
		xhr.send();
	}
}

function addWords() {
	var data = this.responseText.split('\n')
	var text = document.getElementById('words');
	for (var i = 0; i < data.length; i++) {
		var p = document.createElement('p');
		p.innerHTML = data[i];
		text.appendChild(p);
	}
}

