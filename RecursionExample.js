let answer = 1;
function findFactorialRecursive(number) {
  //O(n)    Recursive approach
  if (number === 1 || number === 0) {
    return answer;
  }
  answer = answer * number;
  findFactorialRecursive(number - 1);
  return answer;
}

function findFactorialIterative(number) {
  //O(n)   Iterative Approach

  let answer = 1;
  for (let i = 1; i <= number; i++) {
    answer = answer * i;
  }
  return answer;
}
//console.log(findFactorialRecursive(5));

// function findProductofNumbers(list, length) {
//   //Anchor Base or Base Case
//   if (length == 0) {
//     return 0;
//   } else if (length == 1) {
//     return list[0];
//   } else {
//     let center = length / 2;
//     let lprod = findProductofNumbers(list, center);
//     // console.log(list + center);
//     let rprod = findProductofNumbers(list, length - center);
//     return lprod * rprod;
//   }
// }

// console.log(findProductofNumbers([1, 2, 3, 4, 5, 6], 6));
