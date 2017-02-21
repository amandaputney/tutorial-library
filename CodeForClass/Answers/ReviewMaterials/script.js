var destinyAlbums = ['Destiny\'s Child','The Writing\'s on the Wall', 'Survivor', 'Destiny Fulfilled', '8 Days of Christmas'];

var whitneyAlbums = {
	'Whitney Houston' :'Greatest Love of All',
	'Whitney' : 'I Wanna Dance With Somebody',
	'I\'m Your Baby Tonight' : 'All the Man That I Need',
	'My Love Is Your Love': 'Heartbreak Hotel',
	'The Bodyguard': 'I Will Always Love You',
	'Just Whitney' : 'Try It On My Own',
	'The Preacher\'s Wife': 'Joy'
}

var captainPlanet = {
	"wind" : "Linka",
	"earth" : "Kwame",
	"water" : "Gi",
	"fire" : "Wheeler",
	"heart" : "Ma-Ti"
};

var addMeUp = [14, 35, 23, 48];

var mixedUpTypes = [
	"Lady in Satin",
	1958,
	{ "songs" : ["You've Changed", "Violets for My Furs"]},
]

for (var i = 0; i < destinyAlbums.length; i++) {
	console.log(destinyAlbums[i]);
}

for (key in whitneyAlbums) {
	console.log(key);
}

for (key in whitneyAlbums) {
	console.log(whitneyAlbums[key]);
}



function consoleName(name) {
	console.log(name);
}

function squareNum(num) {
	return num * num;
}

var emptyArray1 = [];

function addToArray(value) {
	emptyArray1.push(value);
}

function returnAnimal(animal) {
	return animal;
}

function divdeBy5(value) {
	return (value / 5);
}


function iterObj(obj) {
	for (key in obj) {
		console.log(key);
	}
}

var emptyArray2 = [];

function addOne(array) {
	for (var i = 0; i < array.length; i++) {
		var newNumber = array[i] + 1
		emptyArray2.push(newNumber);
	}
}

function determineType(array) {
	for (var i = 0; i < array.length; i++) {
		console.log(typeof array[i]);
	}
}

function greaterThan3(val) {
	if (val < 3) {
		console.log('less than 3');
	}
	else {
		console.log('greater than 3')
	}
}

function typeOfFunction(array) {
	for (var i = 0; i < array.length; i++) {
		if (typeof array[i] == "number"){
			console.log('value is a number');
		}
		else if (typeof array[i] == "string"){
			console.log('value is a string')
		}

		else if (typeof array[i] == "object") {
			console.log('value is an object')
		}

		else {
			console.log('value is crazy')
		}
	}
}