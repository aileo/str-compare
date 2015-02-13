'use strict';

var strCompare = {};
strCompare.basic = require('./src/basic');
strCompare.sorensen = require('./src/sorensen-dice');
strCompare.dice = require('./src/sorensen-dice');
strCompare.sorensenDice = require('./src/sorensen-dice');
strCompare.levenshtein = require('./src/levenshtein');
strCompare.jaro = require('./src/jaro-winkler').jaro;
strCompare.jaroWinkler = require('./src/jaro-winkler').jaroWinkler;
strCompare.hamming = require('./src/hamming');

strCompare.distanceToSimilarity = function(str1, str2, distance) {
  return 1 - distance / Math.max(str1.length, str2.length);
};

module.exports = strCompare;
