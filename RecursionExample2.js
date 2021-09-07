function fibonacciIterative(n) {
  //O(n)  // iterative method
  let a = [];
  a[0] = 0;
  a[1] = 1;
  let second;
  for (let i = 2; i < n + 1; i++) {
    a[i] = a[i - 2] + a[i - 1];
    second = a[i];
  }
  return second;
}
// console.log(fibonacciIterative(7));

//Recursive Method of Fibonacci

let f = 0;
let l = 1;
let s = 0;
let counter = 0;
function fibonacciRecursive(n) {
  s = f + l;
  f = l;
  l = s;
  if (n == 1 || n == 0) {
    return 1;
  }

  if (counter + 2 === n) {
    return s;
  }

  fibonacciRecursive(n - 1);
  return s;
}
//console.log(fibonacciRecursive(7));

function Rec(n) {
  //O(2^n)
  if (n < 2) {
    return n;
  }
  return Rec(n - 1) + Rec(n - 2);
}

console.log(Rec(7));
