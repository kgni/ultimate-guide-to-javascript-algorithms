/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/

// Direct comparison using a function to sanitize the strings, then comparing them
function isAnagram(stringA, stringB) {
	// first we want to create a function that will sanitize the string, so that:
	// 1) all chars are lowercased
	// 2) we remove all chars that are not in the alphabet, and we also remove spaces (replacing these with an empty string)
	// 3) we sort the string.
	const sanitizeString = function (str) {
		return str
			.toLowerCase()
			.replace(/[^a-z\d]/g, '')
			.split('')
			.sort()
			.join('');
	};

	// after sanitizing we can now check if the strings are the same.
	return sanitizeString(stringA) == sanitizeString(stringB);
}

function isAnagram(stringA, stringB) {
	// first we want to create a function that will sanitize the string, so that:
	// 1) all chars are lowercased
	// 2) we remove all chars that are not in the alphabet, and we also remove spaces (replacing these with an empty string)
	// 3) we sort the string.
	const sanitizeString = function (str) {
		return str.split('').sort().join('');
	};

	// after sanitizing we can now check if the strings are the same.
	return sanitizeString(stringA) == sanitizeString(stringB);
}

// Character Map Comparison (but this is not sanitized)

function isAnagram(stringA, stringB) {
	function createCharMap(text) {
		let charMap = {};

		for (let char of text) {
			if (charMap.hasOwnProperty(char)) {
				charMap[char]++;
			} else {
				charMap[char] = 1;
			}
		}

		return charMap;
	}

	if (stringA.length === stringB.length) {
		let stringAMap = createCharMap(stringA);
		let stringBMap = createCharMap(stringB);
		for (let char in stringAMap) {
			if (stringAMap[char] !== stringBMap[char]) {
				return false;
			}
		}
		return true;
	} else {
		return false;
	}
}

console.log(isAnagram('silent', 'listen'));

module.exports = isAnagram;
