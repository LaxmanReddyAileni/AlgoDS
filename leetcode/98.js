var isValidBST = function (root) {
  let parent, left, right;
  for (let i = 0; i < root.length; i++) {
    parent = root[i];
    left = root[i + 1];
    right = root[i + 2];
    if (parent <= right && parent >= left) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

// console.log(isValidBST([2, 1, 3]));
// console.log(isValidBST([5, 1, 4, null, null, 3, 6]));

var test = (array) => {
  let map = {};

  for (let i = 0; i < array.length; i = i + 2) {
    if (map[array[i]]) {
      return "none";
    } else {
      map[array[i]] = 1;
    }
  }
  console.log(map);
  for (let j = 0; j < array.length - 2; j = j + 2) {
    if (array[j] < array[j + 2]) {
      continue;
    }else{
        break;
    }
  }
  return "increasing";

  //   let newArray = [];
  //   let count = 0;
  //   for (let i = 0; i < array.length; i = i + 2) {
  //     newArray[count] = array[i];
  //     count++;
  //   }
  //   let x = newArray;
  //   let AscArray = newArray.sort((a, b) => a - b);
  //   let desArray = [];
  //   let k = 0;
  //   for (let i = newArray.length - 1; i >= 0; i--) {
  //     desArray[k] = newArray[i];
  //     k++;
  //   }
  //   console.log(x, AscArray, desArray);
  //   if (newArray === AscArray) {
  //     return "increasing";
  //   } else if (newArray === desArray) {
  //     return "descending";
  //   }
};
console.log(test([12, 65, 11, 72, 13, 72]));
console.log(test([12, 65, 15, 72, 16, 72]));
