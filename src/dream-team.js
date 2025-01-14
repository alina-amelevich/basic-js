const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  const newArr = members.filter((el) => typeof el === 'string');
  if (newArr.length === 0) return false;
  let teamName = [];
  for (const el of newArr) {
    let letter = el.trim().toUpperCase()[0];
    teamName.push(letter);
  }
  return teamName.sort().join('');
}

module.exports = {
  createDreamTeam
};
