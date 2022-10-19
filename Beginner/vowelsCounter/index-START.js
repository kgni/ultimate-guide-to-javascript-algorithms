/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

function vowelsCounter(text) {
	const VOWELS = ['a', 'e', 'i', 'o', 'u'];

	let counter = 0;

	for (let letter of text.toLowerCase()) {
		if (VOWELS.includes(letter)) {
			counter++;
		}
	}
	return counter;
}

function vowelsCounter(text) {
	// Search text with Regex and store all matching instances
	let matchingInstances = text.match(/[aeiou]/gi);

	// Check if matching instances exist then calculate length
	if (matchingInstances) {
		// Return number of vowels
		return matchingInstances.length;
	} else {
		return 0;
	}
}

module.exports = vowelsCounter;
