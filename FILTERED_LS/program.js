// My solution

var fs = require('fs')
var ext = process.argv[3]
var regex = new RegExp("\\." + ext + "$")

fs.readdir(process.argv[2], function (err, list) {
	// body...
	if (err) {throw err}
	list.forEach(function (files) {
		// body...
		if (regex.test(files)) {
			console.log(files)
		}
	})
})

// official solution
var fs = require('fs')
var path = require('path')

var folder = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
	if (err) return console.error(err)
	files.forEach(function (file) {
		if (path.extname(file) === ext) {
			console.log(file)
		}
	})
})