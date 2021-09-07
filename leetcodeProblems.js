/*
var isPalindrome = function (x) {
  let real = x;
  let sum = [];
  let j;
  for (let i = 0; i < 10; i++) {
    if (x === i) {
      return true;
    }
  }

  if (x)
    while (x > 0) {
      sum.push(x % 10);
      x = Math.trunc(x / 10);
      j = sum.join("");
    }
  if (parseInt(j) === real) {
    return true;
  } else {
    return false;
  }
};
console.log(isPalindrome(7));
*/
/*
var destCity = function (paths) {
  //console.log(paths.length);
  let map = {};
  for (let i = 0; i < paths.length; i++) {
    //  console.log(paths[i][1]);
    // console.log(paths[i][0]);
    if (map[paths[i][0]]) {
      continue;
    } else {
      map[paths[i][0]] = 1;
    }
  }
  for (let i = 0; i < paths.length; i++) {
    if (map[paths[i][1]]) {
      continue;
    } else {
      return paths[i][1];
    }
  }
};
console.log(destCity([["A", "Z"]]));
*/
/*
var checkArithmeticSubarrays = function (nums, l, r) {
  let Array = [];
  let bol = [];
  for (let i = 0; i < l.length; i++) {
    Array = nums.slice(l[i], r[i] + 1);
    let n = Array.sort((a, b) => a - b);
    //console.log(n);
    let diff = n[1] - n[0];
    //console.log(n + "  " + diff);
    // newArray.push(n);
    bol[i] = f(n, diff);
  }
  return bol;
};
function f(Array, diff) {
  for (let i = 0; i < Array.length; i++) {
    if (Array[i + 1] - Array[i] === diff || i + 1 === Array.length) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
console.log(checkArithmeticSubarrays([4, 6, 5, 9, 3, 7], [0, 0, 2], [2, 3, 5]));
*/
// var countVowelStrings = function (n) {

// };
// countVowelStrings(2);

var luckyNumbers = function (matrix) {
  let min = [];
  let max = [];
  let lucky = [];
  let minNumber = 0;
  let maxNumber = 0;
  for (let i = 0; i < matrix.length; i++) {
    minNumber = matrix[i][0];
    for (let j = 1; j < matrix[i].length; j++) {
      if (matrix[i][j] < minNumber) {
        minNumber = matrix[i][j];
      }
    }
    min.push(minNumber);

    for (let i = 0; i < matrix.length; i++) {
      console.log("Matrix Length is " + matrix.length);
      maxNumber = matrix[0][i];
      console.log("Max Default number is " + maxNumber + " i value is " + i);
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[j][i] > maxNumber) {
          maxNumber = matrix[j][i];
        }
      }
      max.push(maxNumber);
    }
  }

  let map = {};
  for (let i = 0; i < min.length; i++) {
    map[min[i]] = 1;
  }
  for (let i = 0; i < max.length; i++) {
    if (map[max[i]]) {
      lucky.push(max[i]);
    }
  }
  return lucky;
  // console.log(min, max);
};
console.log(
  luckyNumbers([
    [3, 7, 8],
    [9, 11, 13],
    [15, 16, 17],
  ])
);
