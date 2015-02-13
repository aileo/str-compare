'use strict';

var assert = require('assert'),
    strCompare = require('../str-compare');

it('Sorensen / Dice', function(done) {
  assert.equal(1.0, strCompare.sorensen("healed", "healed"));
  assert.equal(0.8, strCompare.sorensen("healed", "sealed"));
  assert.equal(0.5454545454545454, strCompare.sorensen("healed", "healthy"));
  assert.equal(0.4444444444444444, strCompare.sorensen("healed", "heard"));
  assert.equal(0.4, strCompare.sorensen("healed", "herded"));
  assert.equal(0.25, strCompare.sorensen("healed", "help"));
  assert.equal(0.0, strCompare.sorensen("healed", "sold"));
  assert.equal(1.0, strCompare.sorensen("tomato", "tomato"));
  assert.equal(0.0, strCompare.sorensen("h", "help"));
  assert.equal(1.0, strCompare.sorensen("h", "h"));
  assert.equal(1.0, strCompare.sorensen("", ""));
  assert.equal(0.0, strCompare.sorensen("h", "g"));
  done();
});

it('Levenshtein', function(done) {
  assert.equal(2, strCompare.levenshtein("book", "back"));
  assert.equal(1, strCompare.levenshtein("hello", "helo"));
  assert.equal(8, strCompare.levenshtein("good sir", "baal"));
  assert.equal(5, strCompare.levenshtein("say", "shiver"));
  assert.equal(13, strCompare.levenshtein("feature", "get-project-features"));
  done();
});

it('Jaro', function(done) {
  assert.equal(1.0, strCompare.jaro("Duane", "Duane"));
  assert.equal(0.8222222222222223, strCompare.jaro("Dwayne", "Duane"));
  assert.equal(0.9444444444444445, strCompare.jaro("Martha", "Marhta"));
  assert.equal(0.7666666666666666, strCompare.jaro("Dixon", "Dicksonx"));
  assert.equal(0.4166666666666667, strCompare.jaro("Duane", "Freakishlylongstring"));
  done();
});

it('Jaro-Winkler', function(done) {
  assert.equal(1.0, strCompare.jaroWinkler("Duane", "Duane"));
  assert.equal(0.8400000000000001, strCompare.jaroWinkler("Dwayne", "Duane"));
  assert.equal(0.9611111111111111, strCompare.jaroWinkler("Martha", "Marhta"));
  assert.equal(0.8133333333333332, strCompare.jaroWinkler("Dixon", "Dicksonx"));
  assert.equal(0.4166666666666667, strCompare.jaroWinkler("Duane", "Freakishlylongstring"));
  done();
});

it('Hamming', function(done) {
  assert.equal(2, strCompare.hamming("1011101", "1001001"));
  assert.equal(3, strCompare.hamming("2143896", "2233796"));
  assert.equal(3, strCompare.hamming("ramer", "cases"));
  assert.equal(0, strCompare.hamming("abc", "abc"));
  assert.equal(1, strCompare.hamming("abc", "adc"));
  assert.equal(4, strCompare.hamming("nigth", "nacht"));
  assert.equal(1, strCompare.hamming([0, 1, 0, 1], [1, 1, 0, 1]));
  done();
});
