// damerau-levenshtein algorithm
function dam_lev(string1, string2) {
  let arr = [];
  for (let i = 0; i <= string2.length; i += 1) {
    arr[i] = [i];
  }

  for (let j = 0; j <= string1.length; j += 1) {
    arr[0][j] = j;
  }

  for (let i = 1; i <= string2.length; i += 1) {
    for (let j = 1; j <= string1.length; j += 1) {
      let cost = 1;
      if (string2.charAt(i - 1) == string1.charAt(j - 1)) {
        cost = 0;
      }

      arr[i][j] = Math.min(
        arr[i - 1][j] + 1,
        arr[i][j - 1] + 1,
        arr[i - 1][j - 1] + cost
      );

      if (
        i > 2 &&
        j > 2 &&
        string2.charAt(i - 1) == string1.charAt(j - 2) &&
        string2.charAt(i - 2) == string1.charAt(j - 1)
      ) {
        arr[i][j] = Math.min(arr[i][j], arr[i - 2][j - 2] + 1);
      }
    }
  }

  return arr[string2.length][string1.length];
}

module.exports = dam_lev;
