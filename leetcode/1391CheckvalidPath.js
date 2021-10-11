//BFS
/*
Given a m x n grid. Each cell of the grid represents a street. The street of grid[i][j] can be:
1 which means a street connecting the left cell and the right cell.
2 which means a street connecting the upper cell and the lower cell.
3 which means a street connecting the left cell and the lower cell.
4 which means a street connecting the right cell and the lower cell.
5 which means a street connecting the left cell and the upper cell.
6 which means a street connecting the right cell and the upper cell.

You will initially start at the street of the upper-left cell (0,0). A valid path in the grid is a path which starts from the upper left cell (0,0) and ends at the bottom-right cell (m - 1, n - 1). The path should only follow the streets.

Notice that you are not allowed to change any street.

Return true if there is a valid path in the grid or false otherwise.

Input :  grid = [[2,4,3],[6,5,2]]
Output : true
Input: grid = [[1,2,1],[1,2,1]]
Output: false
Input: grid = [[1,1,2]]
Output: false
Input: grid = [[1,1,1,1,1,1,3]]
Output: true
Input: grid = [[2],[2],[2],[2],[2],[2],[6]]
Output: true
*/

var hasValidPath = function (grid) {
  //grid is an input directions of streets
  let getDir = {
    1: [
      [0, -1],
      [0, 1],
    ],
    2: [
      [-1, 0],
      [1, 0],
    ],
    3: [
      [0, -1],
      [1, 0],
    ],
    4: [
      [0, 1],
      [1, 0],
    ],
    5: [
      [0, -1],
      [-1, 0],
    ],
    6: [
      [0, 1],
      [-1, 0],
    ],
  };

  let queue = [[0, 0]]; //To store the queue elements
  let start = "0, 0"; //Original starting point
  let visited = { start: true };
  let m = grid.length,
    n = grid[0].length;
  //   console.log(m, n); //2 3

  while (queue.length > 0) {
    let [curI, curJ] = queue.shift();
    // console.log(curI, curJ); //0 0

    if (curI === m - 1 && curJ === n - 1) return true; // This means it reached Final Output vertix

    let directions = getDir[grid[curI][curJ]];
    //console.log(directions); //grid[(curI, curJ)] = [ 2, 4, 3 ]  grid[curI][curJ]=2  directions=[ [ -1, 0 ], [ 1, 0 ] ]

    for (let [u, v] of directions) {
      let i = u + curI,
        j = v + curJ;
      //console.log(i, j);//-1 0 1 0

      if (i < 0 || i > m - 1 || j > n - 1 || j < 0 || visited[`${i}${j}`])
        continue;

      let nextCellExisted = false;
      let nextCellDirection = getDir[grid[i][j]];
      // console.log(nextCellDirection); //grid[i][j]=6  nextCellDirection=[ [ 0, 1 ], [ -1, 0 ] ]
      //Checking the next cell is connected to current cell
      for (let [p, q] of nextCellDirection) {
        if (p + i === curI && q + j === curJ) nextCellExisted = true;
      }
      if (nextCellExisted) {
        queue.push([i, j]);
        visited[`${i}${j}`] = true;
      }
    }
  }
  return false; //
};
console.log(
  hasValidPath([
    [3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6],
  ])
);
