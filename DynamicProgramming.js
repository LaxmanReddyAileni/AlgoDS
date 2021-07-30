/*
let cache = {};
function memoizedAddTo80(n) {
  if (n in cache) {
    return cache[n];
  } else {
    console.log("Long Time");
    cache[n] = n + 80;
    return cache[n];
  }
}
console.log(memoizedAddTo80(5));
console.log(memoizedAddTo80(5));
*/

function memoizedAddTo80() {
  let cache = {}; //Declaring global variable in the function
  return function (n) {
    //Closure
    if (n in cache) {
      return cache[n];
    } else {
      console.log("Long Time");
      cache[n] = n + 80;
      return cache[n];
    }
  };
}
const memoized = memoizedAddTo80();
console.log(memoized(5));
console.log(memoized(5));
