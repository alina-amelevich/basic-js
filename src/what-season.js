const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  if (!(date instanceof Date)) throw new Error('Invalid date!');
  let season = ['spring', 'summer', 'autumn', 'winter'];
  // sInd = 0 || 1 || 2 || 3
  let sInd;
  const month = date.getMonth();
  if (month <= 1 || month === 11) sInd = 3; //winter
  else if (month >= 2 && month <= 4) sInd = 0; //spring
  else if (month >= 5 && month <= 7) sInd = 1; //summer
  else sInd = 2; //autumn
  return season[sInd];
}

module.exports = {
  getSeason
};
