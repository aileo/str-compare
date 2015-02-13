'use strict';

module.exports = function(str1, str2) {
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
