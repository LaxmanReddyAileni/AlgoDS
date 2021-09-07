var numJewelsInStones = function (jewels, stones) {
  let maps = {};
  let count = 0;
  for (let i = 0; i < jewels.length; i++) {
    maps[jewels[i]] = 1;
  }
  for (let j = 0; j < stones.length; j++) {
    if (maps[stones[j]]) {
      count++;
    }
  }
  console.log(maps);
  return count;
};

// console.log(numJewelsInStones("z", "ZZ"));

// var checkIfPangram = function (sentence) {
//   let map = {};
//   var arr = "abcdefghijklmnopqrstuvwxyz".split("");
//   for (let j = 0; j < sentence.length; j++) {
//     map[sentence[j]] = 1;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (!map[arr[i]]) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(checkIfPangram("leetcode"));
/*
var missingNumber = function (nums) {
  let map = {};
  // if (nums.length === 1) {
  //   return 0;
  // }
  let sortedArray = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    map[sortedArray[i]] = 1;
  }
  for (let i = 0; i <= nums.length; i++) {
    if (!map[i]) {
      return i;
    }
  }
};
console.log(missingNumber([3,0,1]));
*/
/*
var findDuplicate = function (nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      return nums[i];
    } else {
      map[nums[i]] = 1;
    }
  }
};
console.log(findDuplicate([1,1,2]));
*/
/*  //Unsolved 
var groupThePeople = function (groupSizes) {
  let map = {};
  let Array = [];
  let SubArray = [];
  //  console.log(groupSizes);

  for (let i = 0; i < groupSizes.length; i++) {
    map[i] = groupSizes[i];
  }

  //console.log(map[5]);
  for (let i = 0; i < groupSizes.length; i++) {
    
  }
  console.log(SubArray);
};

groupThePeople([3, 3, 3, 3, 3, 1, 3]);
*/

/*
var squareIsWhite = function (coordinates) {
  const a = 1,
    b = 2,
    c = 3,
    d = 4,
    e = 5,
    f = 6,
    g = 7,
    h = 8;
  let count = 0;
  if (
    coordinates[0] === "a" ||
    coordinates[0] === "c" ||
    coordinates[0] === "e" ||
    coordinates[0] === "g"
  ) {
    count++;
  }
  if (coordinates[1] % 2 === 1) {
    count++;
  }

  if (count % 2 === 1) {
    return true;
  } else {
    return false;
  }
};
console.log(squareIsWhite("a1"));
*/

/*  Unsolved
var nthUglyNumber = function (n) {
  let array = [];
  for (let i = 1; array.length < n; i++) {
    if (i === 1) {
      array.push(i);
    }
    if (i % 2 === 0 || i % 3 === 0 || i % 5 === 0) {
      if (i % 7 === 0) {
        continue;
      }
      array.push(i);
    }
  }
  return array;
};
console.log(nthUglyNumber(15));
*/
