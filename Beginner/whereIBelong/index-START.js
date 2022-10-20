/*
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The
returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).
*/

// checking if the is less than or equal to the current item in array after sorting.
function whereIBelong(arr, num) {
	// sort array, ascending.

	const sortedArray = arr.sort((a, b) => a - b);

	// loop through sorted array, check if the num is less than the current value, if it is, return the previous value.

	for (let i = 0; i < sortedArray.length; i++) {
		if (num <= sortedArray[i]) {
			return i;
		}
	}

	return arr.length;
}

// counting the smaller nums (fastest)
function whereIBelong(arr, num) {
	var counter = 0;
	for (i = 0; i < arr.length; i++) {
		if (num > arr[i]) {
			counter++;
		}
	}
	return counter;
}

// push, sort, indexOf
function whereIBelong(arr, num) {
	arr.push(num);
	arr.sort((a, b) => a - b);
	return arr.indexOf(num);
}

console.log(whereIBelong([1, 2, 3, 4], 1.5));
module.exports = whereIBelong;
