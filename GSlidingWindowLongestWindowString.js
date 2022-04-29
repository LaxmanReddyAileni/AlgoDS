const SlidingWindowString = (S, k) => {
  // Longest String with K distinct letters
  let set = {};
  let maxLen = 0;
  let start = 0;
  for (let i = 0; i < S.length; i++) {
    const RLetter = S[i];
    if (!set[RLetter]) {
      set[RLetter] = 0;
    }
    set[RLetter] += 1;
    while (Object.keys(set).length > k) {
      let LLetter = S[start];
      set[LLetter] -= 1;
      if (set[LLetter] == 0) {
        delete set[LLetter];
      }
      start += 1;
    }
    maxLen = Math.max(maxLen, i - start + 1);
  }
  return maxLen;
};

console.log(SlidingWindowString("araaci", 2));

console.log(SlidingWindowString("araaci", 1));

console.log(SlidingWindowString("cbbebi", 3));
