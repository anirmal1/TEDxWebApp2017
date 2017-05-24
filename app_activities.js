(window.onload = function() {

displayActivities();

function displayActivities() {
	var activities = ['Act 1',
										'Act 2',
										'Act 3',
										'Act 4',
										'Act 5'];

	var actList = document.getElementById('act-list');
	var codes = ['code1',
							 'code2',
							 'code3',
							 'code4',
							 'code5'];
	var callbacks = [function() { submitCode('activity0', codes[0]); return false; } ,
									 function() { submitCode('activity1', codes[1]); return false; },
									 function() { submitCode('activity2', codes[2]); return false; },
									 function() { submitCode('activity3', codes[3]); return false; },
									 function() { submitCode('activity4', codes[4]); return false; }];

	for (var i = 0; i < activities.length; i++) {
		var divAct = document.createElement('div');
		divAct.classList.add('speaker-div-schedule');
		var name = document.createElement('h1');
		name.classList.add('speaker-title');
		name.innerHTML = activities[i];
		divAct.appendChild(name);
		var input = document.createElement('input');
		input.setAttribute('id', 'activity' + i);
		input.setAttribute('name', 'activity' + i);
		input.setAttribute('type', 'text');
		input.setAttribute('autocapitalize', 'off');
		var form = document.createElement('form');
		form.appendChild(input);
		form.onsubmit = callbacks[i];
		input.classList.add('act-input');
		divAct.appendChild(form);
		actList.appendChild(divAct);
	}
}

function submitCode(id, code) {
	console.log(id);
	console.log(document.getElementById(id).value);
	console.log(code);
	if (code == document.getElementById(id).value) {
		console.log('correct!');
	} else {
		console.log('incorrect :(');
	}
}

});
