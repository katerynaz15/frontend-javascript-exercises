module.exports.copy = function(obj) {
	var newObject = {};
	for (var prop in obj) {
		newObject[prop] = obj[prop];
	}
	return newObject;
};

module.exports.extend = function(dest, src) {
	for (var prop in src) {
		dest[prop] = src[prop];
	}
	return dest;
};

module.exports.hasElems = function(obj, arr) {
	for(var i=0;i<arr.length;i++) {
              //console.log(obj[arr[i]])  
		    if (typeof(obj[arr[i]]) == "undefined") {
			    return false;
		
	}
	} return true;
}; 

