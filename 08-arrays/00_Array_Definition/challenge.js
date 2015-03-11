module.exports.newArray = function(a1, a2, a3, a4) {
	var a = [a1, a2, a3, a4];
		return a;
};

module.exports.firstAndLast = function (arr) {
	var newNum = [arr.indexOf.length, arr.length];
	var newString = [arr[0], arr[arr.length-1]]; 
	//arr.length contains the size of the array, to get
	// the last element of the array, check arr[arr.length-1]
		return newNum, newString;
};