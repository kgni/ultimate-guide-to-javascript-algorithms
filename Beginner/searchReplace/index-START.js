function searchReplace(str, word, newWord) {
	if (word[0] === word[0].toUpperCase()) {
		newWord = newWord[0].toUpperCase() + newWord.slice(1);
	}
	return str.replace(word, newWord);
}

function searchReplace(str, word, newWord) {
	let regex = new RegExp(word, 'gi');
	if (/[A-Z]/.test(word[0])) {
		newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1);
	}
	return str.replace(regex, newWord);
}

console.log(
	searchReplace('He is Sleeping on the couch', 'Sleeping', 'sitting')
); // "He is Sitting on the couch"
