window.onload = function() {
	var selector = document.getElementById('select');
	selector.onchange = showData;
}

function showData() {
	var value = document.getElementById('select').value;
	var text = document.getElementById('words');
	if (value == 'none') {
		words.innerHTML = '';
	} else {
		var xhr = new XMLHttpRequest();
		xhr.onload = addWords;
		xhr.open('GET', 'data/word_cloud_data_' + value + '.txt', true);
		xhr.send();
	}
}

function addWords() {
	var data = this.responseText;
	var text = document.getElementById('words');
	text.innerHTML = data;
}

