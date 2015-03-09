module.exports.favoriteNumber = function(favNum, guessNum) {
	if (guessNum>favNum) {
		return "Too high";
	} else if (guessNum<favNum) {
		return "Too low";
	} else {
		return "You got it!";
	}
};

module.exports.checkLock = function (numA, numB, numC, numD) {
	if ((numA===3 || numA===5 || numA===7) && numB===2 && (numC>=5 && numC<=100) && (numD<9 || numD>20)) {
		return "correct";
	} else {
		return "incorrect";
	}
};

module.exports.canIGet = function(item, money) {
	if (item=="MacBook Air" && money>=999) {
		return true;
	} else if (item=="MacBook Pro" && money>=1299) {
		return true;
	} else if (item=="Mac Pro" && money>=2499) {
		return true
	} else if (item=="Apple Sticker" && money>=1) {
		return true;
	} else {
		return false;
	}

};