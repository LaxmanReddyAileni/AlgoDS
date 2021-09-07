//Two Sum  This is O(n^2)
const twoSum = (array, target) => {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        arr.push(i, j);
      }
    }
  }
  return arr;
};

//console.log(twoSum([3,3], 6));

const twoSumOptimal = (array, target) => {
  let map = {};
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    let left = target - array[i];
    if (map[left] != undefined) {
      arr.push(map[left], i);
    } else {
      map[array[i]] = i;
    }
  }
  return arr;
};

console.log(twoSumOptimal([3, 2, 4], 6));
