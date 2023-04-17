const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {

  const preparedArr = [...arr];
  const arrOfCorrectHeights = arr.filter((el) => el !== -1);
  arrOfCorrectHeights.sort((a, b) => a - b);

  for (let i = 0; i < preparedArr.length; i++) {
    if (preparedArr[i] !== -1) {
      preparedArr[i] = arrOfCorrectHeights.shift();
    }
  }

  return preparedArr;
}



module.exports = {
  sortByHeight
};
