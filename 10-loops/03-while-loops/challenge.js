module.exports.stream = function(conditionalFn, actionFn) {
	while(conditionalFn()) {
		actionFn();
	}
};


module.exports.sumNumbers = function(arr) {
	  var total = 0;
	  var i = 0;
	  	while (i<arr.length) {
	  		total += arr[i];
	  		i++;
	  	}

   //      for (i=0; i<arr.length; i++) {
   //          total += arr[i];
   //      }
             return total;
};
