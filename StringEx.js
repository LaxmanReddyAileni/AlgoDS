// var balancedStringSplit = function (s) {
//   let Lcount = 0;
//   let Rcount = 0;
//   let count = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "R") {
//       Rcount++;
//     } else if (s[i] === "L") {
//       Lcount++;
//     }
//     if (Lcount === Rcount) {
//       count++;
//       Lcount = 0;
//       Rcount = 0;
//     }
//   }
//   return count;
// };

// console.log(balancedStringSplit("RLRRRLLRLL"));

var arrayStringsAreEqual = function (word1, word2) {
  let str = "";
  let str2 = "";
  for (let i = 0; i < word1.length; i++) {
    str += word1[i];
  }
  for (let i = 0; i < word2.length; i++) {
    str2 += word2[i];
  }
  if (str === str2) {
    return true;
  } else {
    return false;
  }
};
//console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bcd"]));
//word1 = ["ab", "c"], word2 = ["a", "bc"]

var numberOfMatches = function (n) {
  let count = 0;
  let sum = 0;
  while (n > 1) {
    if (n % 2 === 1) {
      sum = (n - 1) / 2;
      n = (n - 1) / 2 + 1;
      count += sum;
    } else {
      sum = n / 2;
      n = n / 2;
      count += sum;
    }
  }
  return count;
};

//console.log(numberOfMatches(14));

var largestAltitude = function (gain) {
  let resultArray = [];
  resultArray[0] = 0;
  for (let i = 0; i < gain.length; i++) {
    resultArray[i + 1] = resultArray[i] + gain[i];
  }
  let sortedArray = resultArray.sort((a, b) => a - b);
  return sortedArray[sortedArray.length - 1];
};
//console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2]));

var countGoodTriplets = function (arr, a, b, c) {
  let count = 0;
  for (
    let i = 0, j = i + 1, k = j + 1;
    i < arr.length && j > i && k > j;
    i++, j++, k++
  ) {
    if (
      Math.abs(arr[i] - arr[j]) <= a &&
      Math.abs(arr[j] - arr[k]) <= b &&
      Math.abs(arr[i] - arr[k]) <= c
    ) {
      console.log(arr[i], arr[j], arr[k]);
      count++;
    }
  }
  return count;
};

//console.log(countGoodTriplets([1, 1, 2, 2, 3], 0, 0, 1));

var diagonalSum = function (mat) {
  let sum = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat.length; j++) {
      if (i === j) {
        sum += mat[i][j];
      } else if (j === mat.length - i - 1) {
        sum += mat[i][j];
      }
    }
  }
  return sum;

  // console.log(mat);
};

console.log(
  diagonalSum([
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ])
);
