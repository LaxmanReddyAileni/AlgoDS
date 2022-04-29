const TargetSum = (array, target) => {
  let start = 0;
  let end = array.length - 1;
  for (let i = 0; i < array.length - 1; i++) {
    let sum = array[start] + array[end];
    if (sum === target) {
      return [array[start], array[end]];
    } else if (sum > target) {
      end = end - 1;
    } else if (sum < target) {
      start = start + 1;
    }
  }
  return "Pair not found";
};

// const TargetSumApproach = (array, target) => {
//   let map = {};
//   for (let i = 0; i < array.length - 1; i++) {
//     if (map[target - array[i]]) {
//       console.log(map);
//       return [target - array[i], array[i]];
//     } else {
//       map[array[i]] = i;
//     }
//   }
//   return "No pair found";
// };

// console.log(TargetSum([1, 2, 3, 4, 6], 6));
// console.log(TargetSum([2, 5, 9, 11], 11));

// console.log(TargetSumApproach([1, 2, 3, 4, 6], 6));
console.log(TargetSumApproach([2, 5, 9, 11], 11));
