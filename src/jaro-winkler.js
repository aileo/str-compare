'use strict';

/**
 * Calculate Jaro distance and measure common prefix size.
 * @param  {String} str1 First string to compare.
 * @param  {String} str2 Second string to compare.
 * @return {Object}      Object with Jaro distance and prefix size.
 *
 * Wiki : http://en.wikipedia.org/wiki/Jaro%E2%80%93Winkler_distance
 */
var commonCalc = function(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  if (str1.length > str2.length) {
    var temp = str1;
    str1 = str2;
    str2 = temp;
  }

  var m = 0,
      t = 0,
      l = 0,
      p = 0.1,
      maxMatch = 0,
      alreadyMatched = {},
      width = Math.floor(Math.max(str1.length, str2.length) / 2 - 1);


  for (var i1 = 0; i1 < str1.length; i1++) {
    var match = false;

    // If it charaters matches from the begining
    if (str1[i1] === str2[i1] && l === i1) {
      l++;
      m++;
      alreadyMatched[i1] === 0;
      maxMatch = i1;
      continue;
    }

    // For each character of the window
    for (
      var i2 = Math.max(0, i1 - width);
      i2 < Math.min(str2.length, i1 + width + 1);
      i2++) {

      // If it match
      if (str1[i1] === str2[i2] && !(i2 in alreadyMatched)) {
        m++;

        // If it can be a half-transposition
        if (i2 < maxMatch) {
          t += 0.5;
          for (var i = i2; i <= maxMatch; i++) {
            if (alreadyMatched[i] === 0) {
              t += 0.5;
              alreadyMatched[i] = 1;
            }
          }
        }
        else
          maxMatch = i2;

        alreadyMatched[i2] = 0;

        break;
      }
    }
  }

  return {
    dj: (m / str1.length + m / str2.length + (m - t) / m) / 3,
    l: l,
    p: p
  };
};

module.exports = {
  /**
   * Calculate Jaro distance
   * @param  {String} str1 First string to compare
   * @param  {String} str2 Second string to compare
   * @return {Number}      Jaro distance
   */
  jaro: function(str1, str2) {
    return commonCalc(str1, str2).dj;
  },
  /**
   * Calculate Jaro-Winkler distance
   * @param  {String} str1 First string to compare
   * @param  {String} str2 Second string to compare
   * @return {Number}      Jaro-Winkler distance
   */
  jaroWinkler: function(str1, str2) {
    var dist = commonCalc(str1, str2);
    return dist.dj + (dist.l * dist.p * (1 - dist.dj));
  }
};
