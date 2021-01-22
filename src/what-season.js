const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!arguments[0]) return "Unable to determine the time of year!";

	if (date instanceof Date == true) {
		let mouth = date.getUTCMonth();

		if (mouth <= 1 || mouth == 11) {return "winter";}
		if (mouth >= 2 && mouth <= 4) {return "spring";}
		if (mouth >= 5 && mouth <= 7) {return "summer";}
		if (mouth >= 8 && mouth <= 10) {return "autumn";}
	} else {
		throw "Error";
	}
};
