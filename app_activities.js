(window.onload = function() {

displayActivities();

function displayActivities() {
	var activities = ['Act 1',
										'Act 2',
										'Act 3',
										'Act 4',
										'Act 5'];

	var actList = document.getElementById('act-list');

	for (var i = 0; i < activities.length; i++) {
		var divAct = document.createElement('div');
		divAct.classList.add('speaker-div-schedule');
		var name = document.createElement('h1');
		name.classList.add('speaker-title');
		name.innerHTML = activities[i];
		divAct.appendChild(name);
		var input = document.createElement('input');
		input.setAttribute('id', 'activity' + i);
		input.setAttribute('type', 'text');
		input.onsubmit = function() {
			submitCode(i);
		}
		input.classList.add('act-input');
		divAct.appendChild(input);
		actList.appendChild(divAct);
	}
}

function submitCode(i) {
	var codes = ['code1',
							 'code2',
							 'code3',
							 'code4',
							 'code5'];
	if (codes(i) == document.getElementById('activity' + i)) {
		console.log('correct!');
	} else {
		console.log('incorrect :(');
	}
}

});
