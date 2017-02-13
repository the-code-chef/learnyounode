// My solution

var numbers = process.argv.slice(2)

var sum = numbers.reduce(
	function (curr, prev) {
		// body...
		return +curr + +prev;
	});

console.log(sum)

// Official Solution

var result = 0

for (var i = 2; i < process.argv.length; i++) {
	result += Number(process.argv[i])
}

console.log(result)
