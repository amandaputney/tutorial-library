var title = document.getElementById('name')
var listOfAlbums = document.getElementsByTagName('li')

console.log(title.textContent);
console.log(listOfAlbums[2].textContent)
console.log(listOfAlbums[1].innerHTML)

for (var i = 0; i < listOfAlbums.length; i++) {
	console.log(listOfAlbums[i].textContent);
}