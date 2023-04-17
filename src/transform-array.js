const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!(arr instanceof Array)) throw new Error("'arr' parameter must be an instance of the Array!");
  let arrCopy = [...arr];
  let trnsfrmdArr = [];
  const delNext = '--discard-next';
  const delPrev = '--discard-prev';
  const doubleNext = '--double-next';
  const doublePrev = '--double-prev';
  const operations = [delNext, delPrev, doubleNext, doublePrev];

  for (let i = 0; i < arrCopy.length; i++) {
    let item = arrCopy[i];
    let next = arrCopy[i + 1];
    // let prev = arrCopy[i - 1];

    if (next === delPrev) {
      i++;
      continue;
    } else if (next === doublePrev) {
      if (!operations.includes(item)) {
        trnsfrmdArr.push(item, item);
      }
      i++;
      continue;
    } else if (item === delNext) {
      i++;
      continue;
    } else if (item === doubleNext) {
      if (!operations.includes(next) && next !== undefined) {
        trnsfrmdArr.push(next);
        continue;
      }
    }

    if (!operations.includes(item)) {
      trnsfrmdArr.push(item);
    }
  }

  return trnsfrmdArr;
}

module.exports = {
  transform
};
