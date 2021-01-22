// hamming distance

function ham_dis(string1, string2) {
  if (string1.toString().length != string2.toString().length) {
    throw new Error(string1 + "," + string2 + ": length not same");
  }
  count = 0;
  for (let i in string1) {
    if (string1[i] != string2[i]) {
      count += 1;
    }
  }

  return count;
}

module.exports = ham_dis;
