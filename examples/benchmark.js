'use strict';

var strCompare = require('../str-compare'),
    pairCount = 100000,
    strMinLength = 3,
    strMaxLength = 30,
    pairs = [],
    start = 0;


console.log(
  'generating',
  pairCount,
  'random strings from',
  strMinLength,
  'to',
  strMaxLength,
  'characters.'
  );

for (var n = 0; n < pairCount; n++) {
  pairs.push({
    str1: generateString(strMinLength, strMaxLength),
    str2: generateString(strMinLength, strMaxLength)
  });
}

start = new Date();
pairs.forEach(function(pair) {
  strCompare.levenshtein(pair.str1, pair.str2);
});
console.log('Levenshtein execution time (ms) :', new Date() - start);

start = new Date();
pairs.forEach(function(pair) {
  strCompare.sorensen(pair.str1, pair.str2);
});
console.log('Sorensen/Dice execution time (ms) :', new Date() - start);

start = new Date();
pairs.forEach(function(pair) {
  strCompare.jaro(pair.str1, pair.str2);
});
console.log('Jaro execution time (ms) :', new Date() - start);

start = new Date();
pairs.forEach(function(pair) {
  strCompare.jaroWinkler(pair.str1, pair.str2);
});
console.log('Jaro-Winkler execution time (ms) :', new Date() - start);


function generateString(minLength, maxLength) {
  var chars = 'abcdefghijklmnopqrstuvwxyz -',
      str = '',
      length = Math.floor(Math.random() * (maxLength - minLength)) + minLength;

  for (var i = 0; i < length; i++)
    str += chars[Math.floor(Math.random() * chars.length)];

  return str;
}