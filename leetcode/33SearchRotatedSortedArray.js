var search = function (nums, target) {
  const x = nums;

  console.log(x);
  let sortedArray = nums.sort((a, b) => a - b);
  console.log(x);
  let l = 0;
  let h = sortedArray.length - 1;
  while (l <= h) {
    let mid = Math.floor((l + h) / 2);
    if (sortedArray[mid] === target) {
      return nums[mid];
    }
    if (sortedArray[mid] < target) {
      l = mid + 1;
    } else if (sortedArray[mid] > target) {
      h = mid - 1;
    }
  }
  return -1;
};
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
// console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
// console.log(search([1], 0));
