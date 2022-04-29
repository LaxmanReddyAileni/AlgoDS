const fn = (n) => {
  let f = [];
  f[0] = 0;
  f[1] = 1;
  let array=[];
  for (let i = 2; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2];
  }
  for (let i = 0; i < n; i++) {
    array.push(f[i])
  }
  // return f[n];
  return array;
};
console.log(fn(8));
