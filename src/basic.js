'use strict';

module.exports = function(str1, str2) {
  str1 = str1.toLowerCase().replace(/[^a-z0-9]/gi, '');
  str2 = str2.toLowerCase().replace(/[^a-z0-9]/gi, '');

  return str1 === str2 ? 1 : 0;
};
