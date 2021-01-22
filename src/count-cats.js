const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let result = 0;

  matrix.forEach(arr => {
    arr.forEach(item => {
      if (item == '^^') result++;
    });
  });

  return result;
};
