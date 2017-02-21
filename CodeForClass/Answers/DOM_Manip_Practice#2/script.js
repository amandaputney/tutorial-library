var header = document.getElementsByTagName('h1');
var listOfAuthors = document.getElementsByTagName('ul');

header[0].textContent = "African-American Authors";
listOfAuthors[0].classList.add('borderColor');

var newLi = document.createElement('li');
var newText = document.createTextNode('Alice Walker');
newLi.classList.add('orange');
newLi.appendChild(newText);
listOfAuthors[0].appendChild(newLi);