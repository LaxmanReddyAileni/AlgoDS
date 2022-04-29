/*                  Fixed Size Window
Input Array: [2, 6, 9, 2, 1, 8, 5, 6, 3]
num: 3
Output: Maximum sum 
 */

const maxSumWindow = (array, num) => {
  let maxSum = 0;
  let sum = 0;
  if (array.size < num) {
    return null;
  }
  for (let i = 0; i < num; i++) {
    sum += array[i];
  }
  maxSum = sum;
  for (let i = num; i < array.length; i++) {
    sum = sum - array[i - num] + array[i]; // Remove first element and add next element to the initial sum
    if (sum > maxSum) {
      maxSum = sum;
    }
  }
  return maxSum;
};

// console.log(maxSumWindow([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
// console.log(maxSumWindow([10, 20, 30, 40, 50, 60], 3));
// console.log(maxSumWindow([10, 20], 3));

/*

*/
// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 100);
// }

let i=3;
let j=4;
let k=1;
for(let i=0;i<3;i++){
    k+=j;
    j=j-1;
}
console.log(k)