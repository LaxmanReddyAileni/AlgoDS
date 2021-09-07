var countSubstrings = function (s, t) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    for (j = 0; j < t.length; j++) {
      if (!(s[i] === t[j])) {
        console.log(s[i] + t[j], i, j);
        count++;
      }
    }
  }
  console.log(count);
};

countSubstrings("abe", "bbc");
