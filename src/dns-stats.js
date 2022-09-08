const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};

  for (let domain of domains) {
    domain = `.${domain}`.split('');
    let currDom = '';

    for (let i = domain.length-1; i >= 0; i--) {
      currDom += domain[i];
      
      if (domain[i] === '.' || i === 0) {
        let reverDom = currDom.split('').reverse().join('');
        result[`${reverDom}`] = `${reverDom}` in result ? result[`${reverDom}`] + 1 : 1;
      }
    }
  }

  for (let prop in result) {
    let newprop = prop.split('.').reverse();
    newprop.pop();
    newprop = newprop.join('.');

    result[`.${newprop}`] = result[`${prop}`];
    
    if (`.${newprop}` !== prop) {
      delete result[`${prop}`];
    };
  }

  return result;
}

module.exports = {
  getDNSStats
};
