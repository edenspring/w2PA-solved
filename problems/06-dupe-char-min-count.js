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

	const countObj = string.split("").reduce((accum, ele)=>{ //use reduce to create our counter object (see line 20)
		if (accum[ele]) accum[ele]++ //if accum has defined key of current element, increment by 1
		else accum[ele] = 1 //otherwise establish that key with value of 1
		return accum //return accumulator for next iteration
	},{}) //specify empty object as our default accumulator

	//     filter out the keys from our counter object that meet or exceed minimal count
	return Object.keys(countObj).filter(key => countObj[key] >= minCount)

	// your code here

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;
