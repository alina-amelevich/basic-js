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
function repeater(str, {
  repeatTimes = 1,
  separator = '+',
  addition = '',
  additionRepeatTimes = 1,
  additionSeparator = '|'
} = {}) {

  if (str === undefined) return;

  let newStr = '';

  if (typeof str !== 'string') {
    str = stringify(str);
  }
  if (addition !== '' && typeof addition !== 'string') {
    addition = stringify(addition);
  }

  for (let i = 1; i <= repeatTimes; i++) {
    newStr += str;
    if (addition !== '') {
      for (let j = 1; j <= additionRepeatTimes; j++) {
        newStr += addition;
        if (j < additionRepeatTimes) {
          newStr += additionSeparator;
        }
      }
    }
    if (i < repeatTimes) {
      newStr += separator;
    }
  }

  return newStr;
}

module.exports = {
  repeater
};

function stringify(item) {
  if (typeof item === 'object') {
    if (item === null) {
      item = 'null'
    } else if (item.hasOwnProperty('toPrimitive')) {
      item = item.toPrimitive();
    }
  } else {
    item = item.toString();
  }
  return item;
}