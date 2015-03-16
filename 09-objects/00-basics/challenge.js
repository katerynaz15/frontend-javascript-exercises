module.exports.createCourse = function(stringOne, stringTwo, arr) {
	var myClass = new Object();
		myClass.title = stringOne;
		myClass.duration = stringTwo;
		myClass.students = arr;
			return myClass;
//var myClass = {
//title: stringOne,
//duration: stringTwo,
//students: arr }
};

module.exports.addProperty = function(obj, newProp, newValue) {
	if (!obj.hasOwnProperty(newProp)) {
		obj[newProp] = newValue;
		return obj;
	} else {
		return obj;
	}
};

module.exports.formLetter = function(obj) {
	return 'Hello ' + obj.recipient + ',' + 
			'\n' + '\n' +  obj.msg + '\n' + '\n' +  'Sincerely,' 
			+ '\n' + obj.sender;
	};
	//var numbers = {
    //ten: 10}
	//numbers.ten.toString();
	//'10'
			
module.exports.canIGet = function(item, money) {
		var apple = {
		'MacBook Air': 999,
		'MacBook Pro': 1299,
		'Mac Pro': 2499,
		'Apple Sticker': 1
	}
	return apple[item] <= money ? true : false;
}