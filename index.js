const damerau = require("./damerau-levenshtein");
const levenshtein = require("./levenshtein-distance");
const needleman = require("./needleman-wunsch");

exports.printMsg = function () {
  console.log("a message from the levenshtein library: lez fuz serz");
};

exports.dal = damerau;
exports.lev = levenshtein;
exports.ndw = needleman;
