'use strict';

/**
 * Basic comparison function.
 * @param  {String} str1 First string to compare.
 * @param  {String} str2 Second string to compare.
 * @return {Number}      0 when is does not math, 1 else.
 *
 * Only delete non alphanumeric characters and lower case the strings then
 * look for equality.
 */
module.exports = function(str1, str2) {
  str1 = str1.toLowerCase().replace(/[^a-z0-9]/gi, '');
  str2 = str2.toLowerCase().replace(/[^a-z0-9]/gi, '');

  return str1 === str2 ? 1 : 0;
};
