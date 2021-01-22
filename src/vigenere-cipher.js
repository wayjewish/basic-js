const CustomError = require("../extensions/custom-error");

let arChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

class VigenereCipheringMachine {
  constructor(reverse) {
      if (reverse === undefined) {
          this.reverse = true;
      } else {
          this.reverse = reverse;
      }
  }

  encrypt(text, key) {
      if (!text || !key) throw new Error();

      var arText = text.toLowerCase().split('');
      var arKey = key.toLowerCase().split('');
      var result = [];

      for (var i = 0; i < arText.length; i++) {
          if (arChar.includes(arText[i])) {
              if (arKey.length < arText.length) arKey.push(arKey[i]);
            
              let indexNewChar = 0;
              let sumIndex = arChar.indexOf(arText[i]) + arChar.indexOf(arKey[i]);

              if (sumIndex >= 26) {
                  indexNewChar = sumIndex - 26;
              } else {
                  indexNewChar = sumIndex;
              }
              result.push(arChar[indexNewChar]);
          } else {
              result.push(arText[i]);
              arKey.splice(i, 0, ' ');
          }
      }

      if (!this.reverse) result = result.reverse();

      return result.join('').toUpperCase();
  }

  decrypt(text, key) {
      if (!text || !key) throw new Error();

      var arText = text.toLowerCase().split('');
      var arKey = key.toLowerCase().split('');
      var result = [];

      for (var i = 0; i < arText.length; i++) {
          if (arChar.includes(arText[i])) {
              if (arKey.length < arText.length) arKey.push(arKey[i]);
            
              let indexNewChar = 0;
              let diffIndex = arChar.indexOf(arText[i]) - arChar.indexOf(arKey[i]);

              if (diffIndex < 0) {
                  indexNewChar = diffIndex + 26;
              } else {
                  indexNewChar = diffIndex;
              }
              result.push(arChar[indexNewChar]);
          } else {
              result.push(arText[i]);
              arKey.splice(i, 0, ' ');
          }
      }

      if (!this.reverse) result = result.reverse();

      return result.join('').toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
