str-compare is a collection of algorithms to compare strings.

Installation
---

`npm install str-compare`

Algorithms
---

- Hamming distance

- Jaro-Winkler distance

- Levenshtein distance

- Sorensen / Dice coeficient

Basic usage
---

```js
var strCompare = require('str-compare'),
    a = 'healed',
    b = 'healthy';

strCompare.jaro(a,b);
>>> 0.746031746031746

strCompare.jaroWinkler(a,b);
>>> 0.8476190476190476

strCompare.levenshtein(a,b);
>>> 3

strCompare.distanceToSimilarity(a, b, strCompare.levenshtein);
>>> 0.5714285714285714

s.sorensenDice(a,b);
>>> 0.5454545454545454
```

Contribution
---

Please feel free to contribute by forking this repo. Just be sure to add
relevant unit tests and pass them all before submitting any code.

To setup the project, just install npm dependencies with `npm install` and run
tests with `npm test`.

License
---

MIT