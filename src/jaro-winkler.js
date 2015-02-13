'use strict';

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

    if (str1[i1] === str2[i1] && l === i1) {
      l++;
      m++;
      alreadyMatched[i1] === 0;
      maxMatch = i1;
      continue;
    }

    for (
      var i2 = Math.max(0, i1 - width);
      i2 < Math.min(str2.length, i1 + width + 1);
      i2++) {

      if (str1[i1] === str2[i2] && !(i2 in alreadyMatched)) {
        m++;

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
  jaro: function(str1, str2) {
    return commonCalc(str1, str2).dj;
  },
  jaroWinkler: function(str1, str2) {
    var dist = commonCalc(str1, str2);
    return dist.dj + (dist.l * dist.p * (1 - dist.dj));
  }
};
