const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  str = str.split('');
  let result = [str[0]];
  
  for (let i = 1; i < str.length; i++) {
    if (str[i] !== str[i-1]) {
      result.push(' ');
    }
    result.push(str[i]);
  }
  
  return result.join('')
               .split(' ')
               .map(el => el.length > 1 ? `${el.length}${el[0]}` : el[0])
               .join('');
}

module.exports = {
  encodeLine
};
