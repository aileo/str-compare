'use strict';

/**
 * Calculate the hamming distance.
 * @param  {String|Array} str1 First string/array to compare.
 * @param  {String|Array} str2 Second string/array to compare.
 * @return {Number}            Hamming distance.
 *
 * Wiki : http://en.wikipedia.org/wiki/Hamming_distance
 */
module.exports = function(str1, str2) {
  /**
   * Breaking case, Hamming should not compare diiferent length
   * strings (or arrays) so it return the max length.
   */
  if (str1.length !== str2.length)
    return Math.max(str1.length, str2.length);

  if (str1.toLowerCase)
    str1 = str1.toLowerCase();
  if (str2.toLowerCase)
    str2 = str2.toLowerCase();

  var dist = 0;

  for (var i = 0; i < str1.length; i++)
    dist += (str1[i] === str2[i]) ? 0 : 1;

  return dist;
};
