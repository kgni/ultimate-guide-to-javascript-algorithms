/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

// using map,
function longestWord(text) {
	// turn text into array of words.
	const wordsArray = text.split(' ');
	// map over array of words, getting length of every word.
	const wordsLengthArray = wordsArray.map((word) => word.length);
	// get the value of the longest word
	const longestWordLength = Math.max(...wordsLengthArray);
	// return longest word, by getting the index of the longestWordLength and acessing the actual word in the wordsArray by using this index.
	return wordsArray[wordsLengthArray.indexOf(longestWordLength)];
}

// for loop
function longestWord(text) {
	let wordArray = text.split(' ');
	let maxLength = 0;
	let result = '';

	for (let i = 0; i < wordArray.length; i++) {
		if (wordArray[i].length > maxLength) {
			maxLength = wordArray[i].length;
			result = wordArray[i];
		}
	}
	return result;
}

// using sort
function longestWord(text) {
	return text.split(' ').sort((a, b) => b.length - a.length)[0];
}

// Using reduce

function longestWord(text) {
	let result = text.split(' ').reduce((maxLengthWord, currentWord) => {
		if (currentWord.length > maxLengthWord.length) {
			return currentWord;
		} else {
			return maxLengthWord;
		}
	}, '');
	return result;
}

console.log(longestWord('Top Shelf Web Development Training on Scotch'));
module.exports = longestWord;
