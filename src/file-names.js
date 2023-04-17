const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const newNames = [...names];
  let countObj = {};
  for (let i = 0; i < newNames.length; i++) {
    let key = newNames[i];
    if (countObj[key]) {
      countObj[key]++
      newNames[i] = `${newNames[i]}(${countObj[key] - 1})`
      if (countObj[newNames[i]]) {
        countObj[newNames[i]]++
      } else {
        countObj[newNames[i]] = 1;
      }
    } else {
      countObj[key] = 1;
    }
  }

  return newNames;
}

module.exports = {
  renameFiles
};
