module.exports.formLetter = function(firstName, senderName, message) {
	return 'Hello ' + firstName + ',' + '\n' + '\n' +  message + '\n' + '\n' +  'Sincerely,' + '\n' + senderName;
};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
	return bigString.slice(startA, endA).concat(bigString.slice(startB, endB));
};

module.exports.findFirstMatch = function(text, searchString) {
	return text.indexOf(searchString);
};

module.exports.findLastMatch = function(text, searchString) {
	return text.lastIndexOf(searchString);
};

module.exports.substringBetweenMatches = function(text, searchString) {
	var stepOne = text.substring(text.indexOf(searchString), text.lastIndexOf(searchString));
	var stepTwo = stepOne.substring(searchString.length);
	return stepTwo;
};