// My Solution

var http = require('http')
var concatStream = require('concat-stream')

http.get(process.argv[2], function (res) {
	// body...
	res.setEncoding('utf8')
	res.pipe(concatStream(function (data) {
		// body...
		console.log(data.length)
		console.log(data)
	}))
})

// Official Solution
var bl = require('bl')

http.get(process.argv[2], function (response) {
	// body...
	response.pipe(bl(function (err, data) {
		// body...
		if (err) {
			return console.error(err)
		}
		data = data.toString()
		console.log(data.length)
		console.log(data)
	}))
})