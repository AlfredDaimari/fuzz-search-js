// levenshtein algorithm

function lev_dis(string1, string2) {
  let arr = [];

  for (let i = 0; i <= string2.length; i += 1) {
    arr[i] = [i];
  }

  for (let j = 0; j <= string1.length; j += 1) {
    arr[0][j] = j;
  }

  for (let i = 1; i <= string2.length; i += 1) {
    for (let j = 1; j <= string1.length; j += 1) {
      if (string2.charAt(i - 1) == string1.charAt(i - 1)) {
        arr[i][j] = arr[i - 1][j - 1];
      } else {
        arr[i][j] = Math.min(
          arr[i - 1][j - 1] + 1,
          arr[i][j - 1] + 1,
          arr[i - 1][j] + 1
        );
      }
    }
  }

  return arr[string2.length][string1.length];
}

exports.lev_dis = lev_dis;
