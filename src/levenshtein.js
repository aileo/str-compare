'use strict';

module.exports = function(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // degenerate cases
  if (str1 === str2) return 0;
  if (str1.length === 0) return str2.length;
  if (str2.length === 0) return str1.length;

  var v = [[]];

  for (var i2 = 0; i2 <= str2.length; i2++)
    v[0][i2] = i2;


  for (var i1 = 1; i1 <= str1.length; i1++) {
    v[i1] = [];
    v[i1][0] = i1;


    for (var i2 = 0; i2 < str2.length; i2++) {
        // Are the two charaters at the same index equals ?
        var cost = (str1[i1 - 1] == str2[i2]) ? 0 : 1;

        // get minimal cost operation
        v[i1][i2 + 1] = Math.min(
          v[i1][i2] + 1,
          v[i1 - 1][i2 + 1] + 1,
          v[i1 - 1][i2] + cost);
    }
  }

  return v[str1.length][str2.length];
};
