var balancedStringSplit = function (s) {
  let Lcount = 0;
  let Rcount = 0;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      Rcount++;
    } else if (s[i] === "L") {
      Lcount++;
    }
    if (Lcount === Rcount) {
      count++;
      Lcount = 0;
      Rcount = 0;
    }
  }
  return count;
};

console.log(balancedStringSplit("RLRRRLLRLL"));
