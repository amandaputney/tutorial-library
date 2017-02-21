
// HTML EVENT
// function soundAlarm() {
//   alert('Event Working');
// }


// DOM EVENT HANDLER
// var firstQuestion = document.getElementsByTagName('a')[0];
// var firstResponseEl = document.getElementsByClassName('response')[0];

// function onTheTwenty() {
// 	firstResponseEl.style.visibility = 'visible';
// }

// firstQuestion.ondblclick = onTheTwenty;


// EVENT LISTENER
// var secondQuestion = document.getElementsByTagName('h2')[0];
// var secondResponseEl = document.getElementsByClassName('response')[0];

// function showAnswer() {
// 	secondResponseEl.style.visibility = "visible";
// }

// function hideAnswer() {
// 	secondResponseEl.style.visibility = "hidden";
// }

// secondQuestion.addEventListener('mousemove', showAnswer);
// secondQuestion.addEventListener('mouseleave', hideAnswer);


// EVENT OBJECT
// var thirdQuestion = document.getElementsByTagName('h2')[0];
// var thirdChoiceOne = document.getElementsByTagName('p')[0];
// var thirdChoiceTwo = document.getElementsByTagName('p')[1];

// thirdChoiceOne.addEventListener('click', function(e) {
// 	console.log(e);
// 	alert(e.target.outerHTML);
// 	correctAnswer(e);

// })

// thirdChoiceTwo.addEventListener('click', function(e) {
// 	alert(e.target.outerHTML);
// 	correctAnswer(e);	
// })

// function correctAnswer(e) {

// 	if (e.target.innerHTML === "Up From Slavery") {
// 		alert('Correct!');
// 	} 
// 	else {
// 		alert('Try Again!');
// 	}

// }

// EVENT DELEGATION
// var aileyList = document.getElementsByTagName('ul')[0];

// aileyList.addEventListener('click', function(e) {
// 	console.log(e);
// 	console.log(e.target.innerText);
// })
