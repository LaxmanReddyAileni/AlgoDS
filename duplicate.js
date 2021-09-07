// function firstDuplicate(a) {
//   let map = {};
//   for (let i = 0; i < a.length; i++) {
//     if (map[a[i]]) {
//       return a[i];
//     } else {
//       map[a[i]] = 1;

//     }
//   }
// }
// console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));

// function firstNotRepeatingCharacter(a) {
//   let map = {};
//   let Array = [];
//   for (let i = 0; i < a.length; i++) {
//     if (map[a[i]]) {
//       map[a[i]]++;
//       //   return a[i];
//     } else {
//       map[a[i]] = 1;
//     }
//   }
//   for (let i = 0; i < a.length; i++) {
//     if (map[a[i]] === 1) {
//       return a[i];
//     }
//   }
//   return "_";
// }

// s = "abacabad";
// console.log(firstNotRepeatingCharacter(s));

// function rotateImage(a) {
//   let b = [];
//   let sub = [];
//   for (let j = 0; j < a.length; j++) {
//     for (let i = a.length - 1; i >= 0; i--) {
//       sub.push(a[i][j]);
//     }
//     b.push(sub);
//     sub = [];
//   }
//   return b;
// }

// rotateImage([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]);
function ver(grid, n) {
  let map = {};

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (map[grid[i][j]] && grid[i][j] != ".") {
        map[grid[i][j]]++;
      } else {
        if (grid[i][j] != ".") {
          map[grid[i][j]] = 1;
        }
      }
    }
    let arr = [...Object.values(map)];
    for (let k = 0; k < arr.length; k++) {
      if (arr[k] > 1) {
        console.log("1");
        return false;
      } else {
        map = {};
      }
    }
    if (Object.values(map) > 1) {
      console.log("1");
      return false;
    } else {
      map = {};
    }
  }
  return true;
}
function hor(grid, n) {
  let maps = {};
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (maps[grid[j][i]] && grid[j][i] != ".") {
        maps[grid[j][i]]++;
      } else {
        if (grid[j][i] != ".") {
          maps[grid[j][i]] = 1;
        }
      }
    }
    let ar = [...Object.values(maps)];
    for (let k = 0; k < ar.length; k++) {
      if (ar[k] > 1) {
        console.log("2");
        return false;
      } else {
        maps = {};
      }
    }
  }
  return true;
}
function gridForm(grid, x) {
  let grid1 = [];
  console.log("x " + x);
  for (let y = x, a = 0; y < x + 3; y++, a++) {
    for (let r = x, b = 0; r < x + 3; r++, b++) {
      grid1.push(grid[y][r]);
    }
  }
  //console.log(grid1);
  return grid1;
}
function sudoku2(grid) {
  console.log(ver(grid, 9));
  if (!ver(grid, 9)) {
    console.log("111");
    return false;
  }
  if (!hor(grid, 9)) {
    console.log("2");
    return false;
  }

  for (let z = 0; z < 9; z = z + 3) {
    let grid1 = gridForm(grid, 3);
    console.log(grid1);
    if (!ver(grid, 3)) {
      console.log("1");
      return false;
    }
    if (!hor(grid, 3)) {
      console.log("2");
      return false;
    }
  }
  return true;
}
console.log(
  sudoku2([
    [".", ".", ".", "1", "4", ".", ".", "2", "."],
    [".", ".", "6", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", "1", ".", ".", ".", ".", ".", "."],
    [".", "6", "7", ".", ".", ".", ".", ".", "9"],
    [".", ".", ".", ".", ".", ".", "8", "1", "."],
    [".", "3", ".", ".", ".", ".", ".", ".", "6"],
    [".", ".", ".", ".", ".", "7", ".", ".", "."],
    [".", ".", ".", "5", ".", ".", ".", "7", "."],
  ])
);
