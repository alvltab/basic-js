const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let string = '';
  if (str !== '') {
    string = `${str}`;
  }

  let repeatTimes = 1;
  if (options.hasOwnProperty('repeatTimes')) {
    repeatTimes = options.repeatTimes;
  }

  let separator = '';
  if (repeatTimes > 1) {
    if (options.hasOwnProperty('separator')) {
      separator = `${options.separator}`;
    } else {
      separator = '+';
    }
  }

  let addition = '';
  if (options.hasOwnProperty('addition')) {
    addition = `${options.addition}`;
  }

  let additionRepeatTimes = 1;
  if (options.hasOwnProperty('additionRepeatTimes')) {
    additionRepeatTimes = options.additionRepeatTimes;
  }
  
  let additionSeparator = '';
  if (additionRepeatTimes > 1) {
    if (options.hasOwnProperty('additionSeparator')) {
      additionSeparator = `${options.additionSeparator}`;
    } else {
      additionSeparator = '|';
    }
  }

  let adder;
  if (additionRepeatTimes > 1) {
    adder = `${addition}`;
  } else {
    adder = `${addition}${additionSeparator}`;
  }

  for (let addRe = 1; addRe < additionRepeatTimes; addRe++) {
    adder += additionSeparator + addition;
  }
  string += `${adder}`;

  let result;
  if (repeatTimes > 1) {
    result = `${string}`;
  } else {
    result = `${string}${separator}`;
  }
  for (let strRe = 1; strRe < repeatTimes; strRe++) {
    result += separator + string;
  }
  return result;
}

module.exports = {
  repeater
};
