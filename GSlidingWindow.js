const SlidingWindow = (k, A) => {
  // Max Sum in an array
  let sum = 0;
  let start = 0;
  let Maxi = 0;
  for (let i = 0; i < A.length; i++) {
    sum += A[i];

    if (i >= k - 1) {
      Maxi = Math.max(Maxi, sum);
      sum -= A[start];
      start += 1;
    }
  }
  return Maxi;
};

console.log(SlidingWindow(3, [2, 1, 5, 1, 3, 2]));

console.log(SlidingWindow(2, [2, 3, 4, 1, 5]));
