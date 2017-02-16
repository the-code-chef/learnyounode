var net = require('net')

// My Solution
var strftime = require('strftime')

var server = net.createServer(function (socket) {
	// body...
	socket.end(strftime('%Y-%m-%d %H:%M\n'))
})

server.listen(process.argv[2])

// Official Solution
function zeroFill(i) {
	// body...
	return (i < 10 ? '0' : '') + i
}

function now() {
	// body...
	var d = new Date()
	return d.getFullYear() + '-' +
		zeroFill(d.getMonth() + 1) + '-' +
        zeroFill(d.getDate()) + ' ' +
        zeroFill(d.getHours()) + ':' +
        zeroFill(d.getMinutes())
}

var server = net.createServer(function (socket) {
	// body...
	socket.end(now() + '\n')
})

server.listen(process.argv[2])
