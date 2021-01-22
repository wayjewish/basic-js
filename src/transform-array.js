const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)) throw new Error('ERROR');

  let array = arr.slice();;
  let result = [];

  for (let i = 0; i < array.length; i++) {

    switch(array[i]) {
      case '--discard-prev':
        if (i > 0 && array[i - 1] != 'remove') {
          array[i - 1] = 'remove';
          result.pop();
        }
        break;
      case '--double-prev':
        if (i > 0 && array[i - 1] != 'remove') {
          result.push(array[i - 1]);
        }
        break;
      case '--double-next':
        if (i < array.length - 1 && array[i + 1] != 'remove') {
          result.push(array[i + 1]);
        }
        break;
      case '--discard-next':
        array[i + 1] = 'remove';
        i++;
        break;
      default:
        if (array[i] != 'remove') {
          result.push(array[i]);
        }
    }

  }

  return result;
};
