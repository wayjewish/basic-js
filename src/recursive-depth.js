const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
		let level = 0;
		let localLevel = 1;

		arr.forEach( (item) => {
			if (Array.isArray(item)) {
				//level = Math.max(this.calculateDepth(item, level + 1), level);
				localLevel = this.calculateDepth(item);
        if (level < localLevel) level = localLevel;
			}
	  });

	  return ++level;
	}
};