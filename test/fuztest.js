// file to test fuztest
const assert = require("assert");
const dam_lev = require("../src/damerau-levenshtein");
const lev_dis = require("../src/levenshtein-distance");
const ham_dis = require("../src/hamming-distance");
const long_sub = require("../src/longest-subsequence");
const fuzzy = require("../src/index");

function checkDAMLEV() {
  try {
    const t1 = Date.now();
    assert.strictEqual(
      dam_lev("an act", "a cat"),
      2,
      "1. checking damerau-levenshtein \u2716, completed in " +
        (Date.now() - t1) +
        "ms"
    );
    console.log(
      "1. checking damerau-levenshtein \u2713, completed in " +
        (Date.now() - t1) +
        "ms"
    );
  } catch (e) {
    console.log(e.message);
  }
}

function checkLEVDIS() {
  try {
    const t1 = Date.now();
    assert.strictEqual(
      lev_dis("kitten", "sitting"),
      3,
      "2. checking levenshtein distance \u2716, completed in " +
        (Date.now() - t1) +
        "ms"
    );
    console.log(
      "2. checking levenshtein distance \u2713, completed in " +
        (Date.now() - t1) +
        "ms"
    );
  } catch (e) {
    console.log(e.message);
  }
}

function checkHAMD() {
  try {
    const t1 = Date.now();
    assert.strictEqual(
      ham_dis("karolin", "kathrin"),
      3,
      "3. checking hamming distance \u2716, completed in " +
        (Date.now() - t1) +
        "ms"
    );
    console.log(
      "3. checking hamming distance \u2713, completed in " +
        (Date.now() - t1) +
        "ms"
    );
  } catch (e) {
    console.log(e.message);
  }
}

function checkLONGSUB() {
  try {
    const t1 = Date.now();
    assert.strictEqual(
      long_sub("AGGTAB", "GXTXAYB"),
      4,
      "4. checking longest subsequence \u2716, completed in " +
        (Date.now() - t1) +
        "ms"
    );
    console.log(
      "4. checking longest subsequence \u2713, completed in " +
        (Date.now() - t1) +
        "ms"
    );
  } catch (e) {
    console.log(e.message);
  }
}

function checkFUZ() {
  const fuz = new fuzzy([
    "helo",
    "hello",
    "boy of my own",
    "an act",
    "personal",
  ]);
  try {
    const t1 = Date.now();
    assert.deepStrictEqual(
      fuz.lev("helo", { level: 1, max: 3 }),
      [
        { word: "helo", score: 0 },
        { word: "hello", score: 1 },
      ],
      "5. checking fuz levenshtein distance \u2716, completed in " +
        (Date.now() - t1) +
        "ms"
    );
    console.log(
      "5. checking fuz levenshtein distance \u2713, completed in " +
        (Date.now() - t1) +
        "ms"
    );
  } catch (e) {
    console.log(e.message);
  }
}

checkDAMLEV();
checkLEVDIS();
checkHAMD();
checkLONGSUB();
checkFUZ();
