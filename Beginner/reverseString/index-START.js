// CHAINING BUILT-IN METHODS

function reverseString(text) {
	return text.split('').reverse().join('');
}

//  CHAINING BUILT-IN METHODS USING ES6

function reverseString(text) {
	return [...text].reverse().join('');
}

// USING A FOR LOOP

function reverseString(text) {
	let result = '';
	for (let i = text.length - 1; i >= 0; i--) {
		result += text[i];
	}
	return result;
}

// USING A FOR..OF LOOP IN ES6

function reverseString(text) {
	let result = '';
	for (let char of text) {
		result = char + result;
	}
	return result;
}

// RECURSIVE METHOD

function reverseString(text) {
	if (text === '') {
		return '';
	} else {
		return reverseString(text.substr(1)) + text[0];
	}
}

// USING .REDUCE()

function reverseString(text) {
	return text.split('').reduce((acc, char) => char + acc);
}

function sumO_n(arr) {
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	return sum;
}
function sumO_1(arr) {
	const lastValue = arr[arr.length - 1];

	return (lastValue * (lastValue + 1)) / 2;
}

console.log(sumO_n([-1, 0, 1, 2, 3, 4, 5, 6, 7]));

console.log(sumO_1([0, 1, 2, 3, 4, 5, 6, 7]));

module.exports = reverseString;
