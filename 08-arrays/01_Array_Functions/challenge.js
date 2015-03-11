module.exports.reversePlusOne = function(arr) {
	var reversed = arr.reverse();
	var plusOne = reversed.unshift(1);
	//A simple diagram...
	//unshift -> array <- push
    //shift   <- array -> pop
		return reversed;
};

module.exports.plusesEverywhere = function(arr) {
	var newString = arr.join('+');
//var a = ['Wind', 'Rain', 'Fire'];z
//var myVar1 = a.join();      -> assigns 'Wind,Rain,Fire' to myVar1
//var myVar2 = a.join(', ');  -> assigns 'Wind, Rain, Fire' to myVar2
//var myVar3 = a.join(' + '); -> assigns 'Wind + Rain + Fire' to myVar3
//var myVar4 = a.join('');    -> assigns 'WindRainFire' to myVar4
		return newString;
};

module.exports.arrayQuantityPlusOne = function(arr) {
	var newNum = arr.unshift(1);
		return newNum;
};