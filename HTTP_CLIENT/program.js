var http = require('http')
var url = process.argv[2]

http.get(url, function (res) {
	// body...
	res.setEncoding('utf8')
	res.on('data', console.log)
	res.on('error', console.error)
})