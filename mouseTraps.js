//Search for a value in an array. If found return True or else False

function contains(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
console.log(contains([85, 35, 47, 12, 69], 35));

//Sorting an array
function isSorted(array) {
  let isAscending = true;
  let isDescending = true;
  //Ascending order sorting
  for (let i = 1; i < array.length; i++) {
    let v1 = array[i - 1];
    let v2 = array[i];
    //ascending order
    if (v1 < v2) {
      isDescending = false;
    }
    if (v1 > v2) {
      isAscending = false;
    }
  }
  return isAscending || isDescending;
}
console.log(isSorted([54, 24, 12, 211, 2]));
console.log(isSorted([1, 2, 3, 4, 5]));
