// n=1 area=1; n=2 area=5; n=3 area=13;

const Tri = (n) => {
  let x = 1;
  if (n === 0) {
    return 0;
  }
  for (let i = 0; i < n; i++) {
    x += 4 * i;
  }
  return x;
};
console.log(Tri(4));
