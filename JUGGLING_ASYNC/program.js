
var http = require('http')
var concatStream = require('concat-stream')
var results = []
var resultCount = 0

// My Solution
var urls = process.argv.slice(2)

urls.forEach(function (url, i) {
	// body...
	http.get(url, function (response) {
		// body...
		response.setEncoding('utf8')

		response.pipe(concatStream(function (data) {
			// body...
			results[i] = data
			resultCount++

			if (resultCount === urls.length) {
				results.forEach(function (result) {
					// body...
					console.log(result)
				})
			}
		}))
	})
})

// Official Solution
function printResults () {
	for (var i = 0; i < 3; i++) {
		console.log(results[i])
	}
}

function httpGet (index) {
	http.get(process.argv[2 + index], function (response) {
		// body...
		response.setEncoding('utf8')
		response.pipe(concatStream(function (data) {
			// body...
			results[index] = data
			resultCount++

			if (resultCount === 3) {
				printResults()
			}
		}))
	})
}

for (var i = 0; i < 3; i++) {
	httpGet(i)
}