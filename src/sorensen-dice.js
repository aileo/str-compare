'use strict';

/**
 * Calculate Sørensen-dice coeficient.
 * @param  {String} str1 First string to compare
 * @param  {String} str2 Second string to compare
 * @return {Number}      Sørensen-dice coeficient.
 *
 * Wiki : http://en.wikipedia.org/wiki/S%C3%B8rensen%E2%80%93Dice_coefficient
 */
module.exports = function(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // degenerate cases
  if (str1 === str2)
    return 1;
  if (str1.length < 2 || str2.length < 2)
    return 0;

  var str1Groups = {},
      str2Groups = {},
      str1GroupCount = 0,
      str2GroupCount = 0,
      common = 0;

  if (str1.length < str2.length) {
    var temp = str1;
    str1 = str2;
    str2 = temp;
  }

  for (var i = 0; i < str1.length - 1; i++) {
     str1Groups[str1[i] + str1[i + 1]] = 1;

    if (str2[i + 1])
     str2Groups[str2[i] + str2[i + 1]] = 1;
  }

  for (var group in str1Groups) {
    str1GroupCount++;
    if (group in str2Groups)
      common++;
  }

  str2GroupCount = Object.keys(str2Groups).length;

  return 2 * common / (str1GroupCount + str2GroupCount);
};
