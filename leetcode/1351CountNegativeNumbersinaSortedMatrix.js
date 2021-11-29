var countNegatives = function (grid) {
  let array = [];
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    array.push(...grid[i]);
  }
  for (let j = 0; j < array.length; j++) {
    if (array[j] < 0) {
      count++;
    }
  }
  return count;
};
//TEST --1
console.log(
  countNegatives([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ])
);

//TEST --2
console.log(
  countNegatives([
    [3, 2],
    [1, 0],
  ])
);

//TEST --3
console.log(
  countNegatives([
    [1, -1],
    [-1, -1],
  ])
);

//TEST --4
console.log(countNegatives([[-1]]));
