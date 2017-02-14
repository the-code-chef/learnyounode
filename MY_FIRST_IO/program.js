// My Solution

// load the fs module and store it in fs variable
var fs = require('fs')

// read any file
var str = fs.readFileSync(process.argv[2]).toString()
console.log(str.split('\n').length - 1)

// official solution

var fs = require('fs')

var contents = fs.readFileSync(process.argv[2])
var lines = contents.toString().split('\n').length - 1
console.log(lines)

// note you can avoid the .toString() by passing 'utf8' as the
// second argument to readFileSync, then you'll get a String!
//
// console.log(fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1)