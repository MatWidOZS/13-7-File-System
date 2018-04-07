var fs = require('fs');
var colors = require('colors');

fs.readdir('./', 'utf-8', function(err, files) {
	console.log(files);
	fs.writeFile('./files.txt', files, function(err) {
		if (err) throw err;
		console.log('Zawartość katalogu zapisano w pliku files.txt'.bgBlue);
	});
});