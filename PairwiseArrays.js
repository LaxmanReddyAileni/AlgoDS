var temp = [78, 75, 68, 65, 79, 81, 66];
var diff = Math.abs(temp[0] - temp[1]);
for (let i = 0; i < temp.length - 1; i++) {
  let temp1 = temp[i];
  let temp2 = temp[i + 1];
  let diff1 = Math.abs(temp[i] - temp[i + 1]);
  console.log("Diff of " + diff1);
  if (diff1 > diff) {
    diff = diff1;
  }
}
console.log("Max Difference is " + diff);

var x = temp.sort(); //Array is sorted

console.log("Max Number in an array " + x[x.length - 1]); //Max number
console.log("Min Number in an array " + x[0]); //Min number
