var http = require('http')
var map = require('through2-map')

var port = process.argv[2]

http.createServer(function (req, res) {
	// body...
	if (req.method == 'POST') {
		req.pipe(map(function (chunk) {
			// body...
			return chunk.toString().toUpperCase()
		})).pipe(res)
	}
}).listen(port)