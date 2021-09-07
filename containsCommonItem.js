// compare two arrays and list of the common items from the list
const arr1 = ["a", "b", "c", "d"];
const arry2 = ["z", "y", "a"];

const containsCommonItem = (arr1, arry2) => {
  let map = {}; //object

  //Loop through first array and create objects where properties === items in the array
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      // if map[i] is false then if case will be true
      const item = arr1[i]; // Item: a
      map[item] = true; // map= {a:true}
    }
  }
  //   console.log(map);
  //Loop through second array and compare it with object
  for (let j = 0; j < arry2.length; j++) {
    if (map[arry2[j]]) {
      return true;
    }
  }
  return false;
};

var x = containsCommonItem(arr1, arry2);
console.log(x);
