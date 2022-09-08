const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  n = `${n}`.split('');
  let d = n[n.length-1];
  for (let i = n.length - 1; i > 0; i--) {
    d = n[i-1] < n[i] ? n[i-1] : d;
  }
  n.splice(n.indexOf(d), 1);
  return +n.join('');
}

module.exports = {
  deleteDigit
};
