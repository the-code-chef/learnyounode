var filterDir = require('./modular.js')

var folder = process.argv[2]
var ext = process.argv[3]

filterDir(folder, ext, function (err, list) {
	// body...
	if (err) {
		console.log('An error happened when reading ' + folder)
		return err;
	}

	list.forEach(function (file) {
		// body...
		console.log(file)
	})
})