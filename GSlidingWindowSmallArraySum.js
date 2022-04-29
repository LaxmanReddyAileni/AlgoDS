const SlidingWindowSum = (A, k) => { // Smallest Subarray for sum K
  let sum = 0,
    minIndex = Infinity;
  let start = 0;
  for (let i = 0; i < A.length; i++) {
    sum += A[i];
    while (sum >= k) {
      minIndex = Math.min(minIndex, i - start + 1);
      sum = sum - A[start];
      start += 1;
    }
  }
  if (minIndex === Infinity) {
    return 0;
  }
  return minIndex;
};

console.log(SlidingWindowSum([2, 1, 5, 2, 3, 2], 7));

console.log(SlidingWindowSum([2, 1, 5, 2, 8], 7));

console.log(SlidingWindowSum([3, 4, 1, 1, 6], 8));
