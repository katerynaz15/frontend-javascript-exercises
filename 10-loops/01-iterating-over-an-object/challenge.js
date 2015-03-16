module.exports.getKeys = function(obj) {
	var newArray = [];
		for (var prop in obj) {
			newArray.push(prop);
		} 
		return newArray;
};

module.exports.getValues = function(obj) {
	var newArray = [];
		for (var prop in obj) {
		newArray.push(obj[prop]);
	}
		return newArray;
};

module.exports.objectToArray = function(obj) {
	var newArray = [];
        for (var prop in obj) {
            newArray.push(prop + " is " + obj[prop]);
        }
            return newArray;  
};