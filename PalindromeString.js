const palindromeString = (string) => {
  let n = string.length;
  if (n < 0) {
    return false;
  }
  for (let i = 0; i < n; i++) {
    if (string[i] === string[n - i - 1]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

console.log(palindromeString(""));
