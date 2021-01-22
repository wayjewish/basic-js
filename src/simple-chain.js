const CustomError = require("../extensions/custom-error");

const chainMaker = {
  
  arr: [],

  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(value);
    return this;
  },
  removeLink(position) {
    if(!Number.isInteger(position) || position < 1 || this.arr[position] === undefined) {
      this.arr = [];
      throw new Error();
    }
    this.arr.splice(position - 1, 1);
      return this;
  },
  reverseChain() {
    this.arr.reverse();
      return this;
  },
  finishChain() {
    let result = '';

    this.arr.forEach(function(item, index) {
      if (index != 0) result += `~~`;
      result += `( ${item} )`;
    });

    this.arr = [];
    return result;
  }
};

module.exports = chainMaker;
