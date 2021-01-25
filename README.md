# fuzz-search-js

A library for implementing fuzzy search using:

- levenshtein distance algorithm
- damerau levenshtein distance algorith
- hamming distance algorithm
- longest subsequence algorithm

## Installation

Using npm:

```shell
npm i --save fuzz-search-js
```

### Options

- level: the length of the string is the starting level, how much levels should it match strings above and below its level

- max: how many strings should it return

```js
const fuzzy = require("fuzz-search-js");
// For implementing Levenshtein Distance algorithm
const fuz = new fuzzy(["helo","hello", "boy of my own","an act","personal",])
console.log(fuz.lev('helo'), options={level:1, max:2}) //default {level:3, max:5}
//expected value
[{ word: "helo", score: 0 },{ word: "hello", score: 1 },]
```

## Algorithms in library for lists (how to call them)

```js
//levenshtein distance
Object.lev('String')
//damerau levenshtein
Object.dam('String)
```

## Algorithms in library for comparing two strings (will return score)

```js
//levenshtein distance
fuzzy.getLevenDis("String1", "String2");
//hamming distance
fuzzy.getHamDis("String1", "String2");
//damerau levenshtein distance
fuzzy.getDamLevDis("String1", "String2");
//longest subsequence score
fuzzy.getLongSubqDis("String1", "String2");
```
