// My Solution

var fs = require('fs')

fs.readFile(process.argv[2], 'utf8', function (err, data) {
	// body...
	if (err) {throw err}
	console.log(data.split('\n').length - 1)
})

// official solution
var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, function (err, contents) {
	if (err) {
		return console.log(err)
	}
	// fs.readFile(file, 'utf8', callback) can also be used
	var lines = contents.toString().split('\n').length - 1
	console.log(lines)
})