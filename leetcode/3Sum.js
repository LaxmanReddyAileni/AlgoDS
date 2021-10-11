var ThreeSum = function (nums) {
    nums = nums.sort(compare);
    let res = [];
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        let left = j + 1;
        let right = nums.length - 1;
        while (left < right) {
          let sum = nums[i] + nums[j] + nums[left] + nums[right];
          if (sum === target) {
            res.push([nums[i], nums[j], nums[left], nums[right]]);
            while (nums[left] === nums[left + 1]) left++;
            while (nums[right] === nums[right - 1]) right--;
            left++;
            right--;
          } else if (sum < target) {
            left++;
          } else {
            right--;
          }
        }
        while (nums[j] === nums[j + 1]) j++;
      }
      while (nums[i] === nums[i + 1]) i++;
    }
  
    return res;
  };
  function compare(a, b) {
    return a - b;
  }
  
  ThreeSum([-1,0,1,2,-1,-4])