// var numJumps = (array, diff) => {
//   let arr = [];
//   for (let i = 0; i < array.length; i++) {
//     let count = 1;
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] === array[j] && i != j && Math.abs(i - j) <= diff) {
//         count++;
//       }
//     }
//     arr.push(count);
//   }
//   return Math.max(...arr);
// };

// console.log(numJumps([4, 3, 1, 2, 1, 3, 3, 1, 2, 3], 1));

// console.log(numJumps([1, 2, 3, 1, 3, 2, 1], 2));





















"use strict";
function countHighlyProfitableMonths(stockPrices, k) {
  var monthsHavingHighestProfit = 0;
  var prevIndex = 0;
  for (var j = 1; j < stockPrices.length; j++) {
    if (stockPrices[j] <= stockPrices[j - 1]) {
      prevIndex = j;
    }
    if (j - prevIndex + 1 == k || j - prevIndex >= k) {
      monthsHavingHighestProfit += 1;
    }
  }
  return parseInt(monthsHavingHighestProfit);
}

console.log(countHighlyProfitableMonths([5, 3, 5, 7, 8], 3));
