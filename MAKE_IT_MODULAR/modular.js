var fs = require('fs')
var path = require('path')

module.exports = function (folder, ext, cb) {
	// body...

	fs.readdir(folder, function (err, files) {
		// body...
		if (err) {
			return cb(err)
		}

		list = files.filter(function (file) {
			// body...
			return path.extname(file) === '.' + ext
		})

		cb(null, list)
	})
}