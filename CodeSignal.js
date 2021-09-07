// function makeIncreasing(numbers) {
//   let swapnumber = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < numbers[i + 1]) {
//       continue;
//     } else if (numbers[i] > numbers[i + 1]) {
//       for (let k = 0; k < numbers.length; k++) {
//         let len = numbers[k].toString().length;
//         console.log(numbers[k]);
//         for (let j = 0; j < len; j++) {
//           swapnumber[j] = Math.trunc(numbers[k] % 10);
//           numbers[k] = Math.abs(numbers[k] / 10);
//         }

//         if (swapnumber.length > 1) {
//           swapnumber = Number(swapnumber.join(""));
//         }
//         console.log("Swapped Number is " + swapnumber);

//         if (swapnumber < numbers[k + 1] || k + 1 === numbers.length) {
//           // console.log("entered");
//           continue;
//         } else {
//           return false;
//         }
//       }
//     }
//   }
//   return true;
// }
// console.log(makeIncreasing([13, 31, 30]));

function duplicatesOnSegment(arr) {
  let map = {};
  let newA = [];
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      map[arr[i]]++;
      newA.push([arr[i], arr[i + 1]]);
    } else {
      map[arr[i]] = 1;
    }
    
  }
  console.log(newA);
}

duplicatesOnSegment([0, 0, 0]);
//[1, 2, 1, 2, 3]





// function mutateTheArray(n, a) {
//   let b = [];
//   for (let i = 0; i < n; i++) {
//     if (i === 0) {
//       a[i - 1] = 0;
//     }
//     if (i === a.length - 1) {
//       a[i + 1] = 0;
//     }
//     b[i] = a[i - 1] + a[i] + a[i + 1];
//   }
//   console.log(b);
// }
// mutateTheArray(5, [4, 0, 1, -2, 3]);
