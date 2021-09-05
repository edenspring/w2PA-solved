/***********************************************************************
Write a function `pickyMyMap` that accepts an array and a callback as
arguments. The function should call the callback for each element of the
array, passing in the element and return a new array of the results of
each call to the callback function. If the result of the callback function
returns something falsey, then do not add it in the result array.

const nums = [1, 2, 3, 4];
pickyMyMap(nums, (num) => num - 2); // [-1, 1, 2]

const booleans = [true, false, true, false, true];
pickyMyMap(booleans, (boolean) => !boolean); // [true, true]

You may not use Array's `map()`, `filter()`, or `forEach()` methods.
***********************************************************************/

// your code here
const pickyMyMap = (arr, cb) => arr.reduce((accum, ele) => { //use reduce because the instructions don't forbid it
	const res = cb(ele) //store the result of passing our current element into the callback in variable res
	if (res) accum.push(res) //if res is truthy, add it to our accumulator
	return accum //return our accumulator for use in next iteration
}, []) //specify an empty array as the starting value for our accumulator

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
	module.exports = pickyMyMap;
} catch (e) {
	module.exports = null;
}
