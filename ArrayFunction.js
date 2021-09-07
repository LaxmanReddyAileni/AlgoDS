//Take an array and add all the differences of side each element
//[2,5,8,9,54] //3+3+1+45=52

var array = [2, 5, 8, 9, 54];
var diff = 0;
const ArrayFunction = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    var diff1 = Math.abs(array[i] - array[i + 1]);
    diff += diff1;
  }
  return diff;
};
console.log(ArrayFunction(array));

//Things to consider
//What if array is empty?
//What if there is one value in an array?
//What if there are 2 values in an array?
//what if there are many values in an array?
