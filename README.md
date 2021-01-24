# fuzz-search-js v0.0.3

A library for implementing fuzzy search using:

- levenshtein distance algorithm
- damerau levenshtein distance algorith
- hamming distance algorithm
- longest subsequence algorithm

## Installation

Using npm

```shell
npm i --save fuzz-search-js
```

```js
const fuzzy = require("fuzz-search-js");
\\ For implementing Levenshtein Distance algorithm
const fuz = new fuzzy(["helo",
    "hello",
    "boy of my own",
    "an act",
    "personal",])
console.log(fuz.lev('helo'), options={level:1, max:2}) \\default {level:3, max:5}
\\ expected value [{ word: "helo", score: 1 },
        { word: "hello", score: 2 },]
```

## Algorithms in library for lists (how to call them)

```js
\\levenshtein distance
Object.lev('String')
\\damerau levenshtein
Object.dam('String)
```

## Algorithms in library for comparing two strings (will return score)

```js
\\ levenshtein distance
fuzzy.getLevenDis('String1', 'String2')
\\ hamming distance
fuzzy.getHamDis('String1', 'String2')
\\amerau levenshtein distance
fuzzy.getDamLevDis('String1', 'String2')
\\ longest subsequence score
fuzzy.getLongSubqDis('String1', 'String2')
)
```
