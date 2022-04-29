const SortedSubSequence = (array, n) => {
  let A = array.sort((a, b) => a - b);
  let B = [];
  for (let i = 0; i < n; i++) {
    if (A[i] != A[i + 1]) {
      B.push(A[i]);
    }
  }
  console.log(B);
  if (B.length < 3) {
    return 0;
  } else {
    return B.length - 2;
  }
};
console.log(SortedSubSequence([1, 1, 3], 3));
console.log(SortedSubSequence([1, 2, 1, 1, 3, 4, 5, 4], 8));
