module.exports.sumNumbers = function(arr) {
	var sum = 0;
	for (var i = 0; i < arr.length; i++) { 
		sum += arr[i];
	} 
	return sum;
};

module.exports.splitAndLowerCaseString = function(inputString) {
	var lowerCase = inputString.toLowerCase();
	var splitString = lowerCase.split(",");
		return splitString;
};

module.exports.addIndex = function (arr) {
	var newArray = [];
	for (var i=0; i<arr.length; i++) {
         newArray.push(i + " is " + arr[i]);
    } return newArray;
};
