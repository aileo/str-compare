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

/**
 * Transform distance to a similarity indice.
 * @param  {String}   str1     First compared string
 * @param  {String}   str2     Second compared string
 * @param  {Function} compare  Comparison function
 * @return {Number}            Similarity indice
 */
strCompare.distanceToSimilarity = function(str1, str2, compare) {
  return 1 - compare(a,b) / Math.max(str1.length, str2.length);
};

module.exports = strCompare;
