var titleElement = document.getElementById('title');
var bioElement = document.getElementsByClassName('bio');
var firstMemberElement = document.querySelector('.member');
var memberElements = document.querySelectorAll('.member');

//Accessing DOM
console.log(titleElement);
console.log(bioElement);
console.log(firstMemberElement);
console.log(memberElements);
console.log('------ End of Accessing DOM');

// Accessing item in List
console.log(memberElements.item(0));
console.log(memberElements[0]);
console.log('------ End of Individual Item');

// Looping through List
for (var i = 0; i < memberElements.length; i++) {
	console.log(memberElements[i]);
};
console.log('------ End of Traditional Loop')

// Accessing Text
for (var i = 0; i < memberElements.length; i++) {
	console.log(memberElements[i].innerHTML)
}
console.log('------ innerHTML')

for (var i = 0; i < memberElements.length; i++) {
	console.log(memberElements[i].textContent)
}
console.log('------ textContent')

for (var i = 0; i < memberElements.length; i++) {
	console.log(memberElements[i].innerText)
}
console.log('------ innerText')

//Changing Text
document.getElementById('title').textContent = 'Tina Knowles';
memberElements[2].innerText = 'Michelle WHO?';


//Changing Class
var farah = document.getElementsByClassName('secondIter')[0];
farah.classList.add('green', 'red');
farah.classList.remove('green');


//Appending Element
var newEl = document.createElement('li');
var newText = document.createTextNode('New Member');
newEl.classList.add('newMember');
newEl.appendChild(newText);
var position = document.getElementsByTagName('ul')[0];
position.appendChild(newEl);


//Removing Element
newEl.parentNode.removeChild(newEl);










