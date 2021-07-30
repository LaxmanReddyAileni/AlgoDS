var sortSentence = function (s) {
  let tryw = [];
  let num = [];
  let res = [];
  for (let i = 0; i < s.length; i++) {
    if (/^[0-9]+$/.test(s[i])) {
      num.push(s[i]);
    } else {
      tryw[i] = s[i];
    }
  }
  let x = tryw.join("").split(" ");

  for (let j = 0; j < num.length; j++) {
    res[num[j] - 1] = x[j];
  }
  return res.join(" ");
};

console.log(sortSentence("is2 sentence4 This1 a3"));
//"This is a sentence"
