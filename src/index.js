/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
  focus = 'family',
  knowsProgramming = true,
  config = {
    family: 4
  }
) {
  const DEFAULT_HOURS = 800;
  const ADDITIONAL_HOURS = 500;

  return Math.ceil((DEFAULT_HOURS + (knowsProgramming ? 0 : ADDITIONAL_HOURS)) / config[focus]);
};