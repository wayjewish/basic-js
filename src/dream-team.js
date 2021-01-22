const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let result = [];

  members.forEach(item => {
    if (typeof item == 'string') {
        let str = item.replace(/\s+/g, '');
        result.push(str[0].toUpperCase());
    }
  });

  return result.sort().join('');
};
