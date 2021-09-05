/***********************************************************************
Write a function `duplicateCharMinCount(string, minCount)` that will takes
a string as an argument and returns an array of characters that show up
at least `minCount` number of times. The string will have at least one
character.

Examples:

duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]
***********************************************************************/

function duplicateCharMinCount(string, minCount) {

	const countObj = string.split("").reduce((accum, ele)=>{
		if (accum[ele]) accum[ele]++
		else accum[ele] = 1
		return accum
	},{})
	return Object.keys(countObj).filter(key => countObj[key] >= minCount)

	// your code here

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;
