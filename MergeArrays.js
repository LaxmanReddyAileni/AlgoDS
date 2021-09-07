function mergeSortedArrays(array1, array2) {
  let mergeArrays = [...array1, ...array2];
  let arrayItem1 = array1[0];
  let arrayItem2 = array2[0];

  console.log(mergeArrays.sort());
}

mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
