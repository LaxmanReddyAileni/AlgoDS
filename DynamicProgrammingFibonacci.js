// 0,1,1,2,3,5,8,13,21,34,.....
let count = 0;
const FibonacciMaster = () => {
  let cache = {};
  return function fib(n) {
    count++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
};

const fibi = FibonacciMaster();

//console.log(fibi(6));

//console.log("We did " + count + " calculations");

//Bottomup approach
function FibonacciMaster2(n) { //Avoid Recursion
  let answer = [0, 1];
  for (let i = 2; i <= n; i++) {
    answer.push(answer[i - 2] + answer[i - 1]);
  }
  return answer.pop();
}

console.log(FibonacciMaster2(6));
