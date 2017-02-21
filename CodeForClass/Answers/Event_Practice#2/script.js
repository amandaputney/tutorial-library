var factObject = {
	'Ella' : 'Won 14 Grammy Awards',
	'Billie': 'Was born Eleanora Fagan',
	'Dinah': 'Was inducted to Rock and Roll Hall of Fame in 1993',
	'Sarah': 'Would use \'Send In the Clows\' to show her 3 octave range',
	'Lena': 'Starred in her own one person show on Broadway',
	'Nancy': 'Was one of 6 children',
	'Bessie': 'Was a character on Broadway in the musical \'Pansy\' '
}

var questionEl = document.getElementsByTagName('h2')[0];
var list = document.getElementsByTagName('ul')[0];

function showList() {
	list.style.visibility = "visible";
}

questionEl.ondblclick = showList;


list.addEventListener('click', function(e) {
	var name = e.target.textContent.split(" ")[0];
	console.log(name);
	for (key in factObject) {
		if (name == key){
			alert(factObject[key]);
		}
	}
})