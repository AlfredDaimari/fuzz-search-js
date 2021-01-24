const dam_lev = require("./damerau-levenshtein");
const ham_dis = require("./hamming-distance");
const lev_dis = require("./levenshtein-distance");
const long_sub = require("./longest-subsequence");

class fuzzy {
  static getHamDis(string1, string2) {
    return ham_dis(string1, string2);
  }

  static getDamLevDis(string1, string2) {
    return dam_lev(string1, string2);
  }

  static getLevenDis(string1, string2) {
    return lev_dis(string1, string2);
  }

  static getLongSubq(string1, string2) {
    return long_sub(string1, string2);
  }

  constructor(list) {
    if (typeof list != "object") {
      throw new Error("array parameter required");
    }

    let uniqueL = [];
    list.forEach((str) => {
      if (!uniqueL.includes(str)) {
        uniqueL.push(str);
      }
    });

    let max = 0;
    for (let i of uniqueL) {
      try {
        this[i.length].push(i);
      } catch {
        this[i.length] = [i];
        if (max < i.length) {
          max = i.length;
        }
      }
    }

    this.max = max;
  }

  dal(str, options = { level: 3, max: 5 }) {
    return this._calculate(str, options, dam_lev);
  }

  lev(str, options = { level: 3, max: 5 }) {
    return this._calculate(str, options, lev_dis);
  }

  _calculate(str, options, func) {
    // function to calculate fuzzy-matches with a selected algorithm
    this._checkOptions(options);

    let wordList = [],
      count = 0,
      middle = str.length,
      lowerLimit = middle,
      upperLimit = middle;

    // distance against the middle set
    if (this[middle] != undefined) {
      for (let i of this[middle]) {
        wordList.push({ word: i, score: func(str, i) });
      }
    }

    // going down the levels
    while (count != options.level) {
      let limits = this._setLimits(lowerLimit - 1, upperLimit + 1);
      if (limits.lowerLimit == lowerLimit && limits.upperLimit == upperLimit) {
        break;
      }

      if (
        limits.lowerLimit != lowerLimit &&
        this[limits.lowerLimit] != undefined
      ) {
        lowerLimit = limits.lowerLimit;
        for (let i of this[lowerLimit]) {
          wordList.push({ word: i, score: func(str, i) });
        }
      }

      if (
        limits.upperLimit != upperLimit &&
        this[limits.upperLimit] != undefined
      ) {
        upperLimit = limits.upperLimit;
        for (let i of this[upperLimit]) {
          wordList.push({ word: i, score: func(str, i) });
        }
      }

      count += 1;
    }

    return this._sort(options.max, wordList);
  }

  _checkOptions(options) {
    if (options.level == undefined) {
      throw new Error("options:level not provided");
    }

    if (options.max == undefined) {
      throw new Error("options:max not provided");
    }

    if (options.level < 1) {
      throw new Error("options:level has to be a minimum of 1");
    }
  }

  _setLimits(lowerLimit, upperLimit) {
    while (this[lowerLimit] == undefined && lowerLimit != -1) {
      lowerLimit -= 1;
    }

    while (this[upperLimit] == undefined && upperLimit != this.max + 1) {
      upperLimit += 1;
    }

    return { lowerLimit, upperLimit };
  }

  _sort(len, list) {
    for (let i = 0; i < (len < list.length ? len : list.length); i += 1) {
      let min = i;
      for (let j = i; j < list.length; j += 1) {
        if (list[min].score > list[j].score) {
          min = j;
        }
      }
      let temp = list[min];
      list[min] = list[i];
      list[i] = temp;
    }

    return list.slice(0, len < list.length ? len : list.length);
  }
}

module.exports = fuzzy;
