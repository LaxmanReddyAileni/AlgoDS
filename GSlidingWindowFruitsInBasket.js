const SlidingWindow = (Arr) => {
  let set = {};
  let start = 0;
  let maxi = 0;
  for (let i = 0; i < Arr.length; i++) {
    if (!set[Arr[i]]) {
      set[Arr[i]] = 0;
    }
    set[Arr[i]] += 1;
    while (Object.keys(set).length > 2) {
      let left = Arr[start];
      set[left] -= 1;
      if (set[left] === 0) {
        delete set[left];
      }
      start += 1;
    }
    maxi = Math.max(maxi, i - start + 1);
  }
  return maxi;
};

console.log(SlidingWindow(["A", "B", "C", "A", "C"]));

console.log(SlidingWindow(["A", "B", "C", "B", "B", "C"]));
