var twoSum = function (nums, target) {
  let map = {};
  let array = [];
  for (let i = 0; i < nums.length; i++) {
    let req = target - nums[i];
    if (map[req] !== undefined) {
      array.push(map[req], i);
    } else {
      map[nums[i]] = i;
    }
  }
  return array;
};
console.log(twoSum([2, 7, 11, 15], 9));
