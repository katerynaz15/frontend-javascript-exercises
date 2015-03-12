module.exports.addItem = function(addToTheEnd, arr) {
	if (addToTheEnd==arr) {
		return arr;
	} else {
		var list = arr;
		var newAddition = list.push(addToTheEnd);
		return list;
	}
};

module.exports.reverseSortedList = function(arr) {
	var sort = arr.sort();
	var reverse = sort.reverse();
		return sort;
};