var kWeakestRows = function (mat, k) {
  let count = 0;
  let result = [];
  let s = [];
  for (let i = 0; i < mat.length; i++) {
    for (j = 0; j < mat[i].length; j++) {
      if (mat[i][j] > 0) {
        count++;
      }
    }
    result.push(count);
    count = 0;
  }

  let map = {};

  for (let i = 0; i < result.length; i++) {
    map[i] = result[i];
  }
  console.log(Object.keys(map).length);

    for(let j=0;j<Object.keys(map).length;j++){
        if(Object.values(map)){
            
        }
    }
  //return s;
};

console.log(
  kWeakestRows(
    [
      [1, 0, 0, 0],
      [1, 1, 1, 1],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
    ],
    2
  )
);
