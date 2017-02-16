var http = require('http')
var fs = require('fs')

var port = process.argv[2]
var file = process.argv[3]

// My Solution
var server = http.createServer(function (req, res) {
	// body...
	fs.createReadStream(file).pipe(res)
})
server.listen(port)

// Official Solution
var server = http.createServer(function (req, res) {
	// body...
	res.writeHead(200, {
		'content-type': 'text/plain'
	})

	fs.createReadStream(file).pipe(res)
})
server.listen(port)