const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let arAddition = [];
	let strAddition = '';
	let arStr = [];

  if (options.addition !== undefined) {
		if (typeof options.addition != "string") options.addition = String(options.addition);

		if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;

		while (options.additionRepeatTimes-- > 0) arAddition.push(options.addition);

		if (options.additionSeparator) {
			strAddition = arAddition.join(options.additionSeparator);
		} else {
			strAddition = arAddition.join('|');
		}
	}

	if (typeof str != "string") str = String(str);

	if (!options.repeatTimes) options.repeatTimes = 1;

	if (strAddition) {
		if (options.repeatTimes) while (options.repeatTimes-- > 0) arStr.push(str+strAddition);
	} else {
		if (options.repeatTimes) while (options.repeatTimes-- > 0) arStr.push(str);
	}

	if (options.separator) {
		str = arStr.join(options.separator);
	} else {
		str = arStr.join('+');
	}

	return str;
};
  