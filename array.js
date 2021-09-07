var days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

var temp = [70, 69, 68, 75, 78, 66, 61];

for (var i = 0; i < days.length; i++) {
  // console.log("Temparature on " + days[i] + " was: " + temp[i]);
}

let lowest = temp[0];
let highest = temp[0];
for (let i = 0; i < temp.length; i++) {
  if (lowest > temp[i]) {
    lowest = temp[i];
  }
  if (highest < temp[i]) {
    highest = temp[i];
  }
}

// console.log("Temp lowest is " + lowest);
// console.log("Temp highest is " + highest);

var createTargetArray = function (nums, index) {
  let array = [];
  for (let i = 0; i < index.length; i++) {
    array.splice(index[i], 0, nums[i]);
  }
  return array;
};

// console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1])); //[ 0, 4, 1, 3, 2 ]

var countMatches = function (items, ruleKey, ruleValue) {
  let y;
  let addMap = {};
  if (ruleKey === "color") {
    y = 1;
  } else if (ruleKey === "type") {
    y = 0;
  } else if (ruleKey === "name") {
    y = 2;
  }
  for (let i = 0; i < items.length; i++) {
    if (items[i][y] === ruleValue) {
      addMap[i] = items[i];
    }
  }
  return Object.values(addMap).length;
};

// console.log(
//   countMatches(
//     [
//       ["phone", "blue", "pixel"],
//       ["computer", "silver", "lenovo"],
//       ["phone", "gold", "iphone"],
//     ],
//     "color",
//     "silver"
//   )
// );// Output: 1
// Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
// Output: 1

var maxProductDifference = function (nums) {
  let sortedArray = nums.sort(compareNumbers);
  function compareNumbers(a, b) {
    return a - b;
  }
  console.log(sortedArray);
  return (
    sortedArray[nums.length - 1] * sortedArray[nums.length - 2] -
    sortedArray[0] * sortedArray[1]
  );
};
// console.log(maxProductDifference([1, 6, 7, 5, 2, 4, 10, 6, 4]));

var getConcatenation = function (nums) {
  // console.log(nums);
  let array1 = [];
  let array2 = [];
  for (let i = 0; i < nums.length; i++) {
    array1[i] = nums[i];
    array1[i + nums.length] = nums[i];
  }
  return array1;
};

//console.log(getConcatenation([1, 3, 2, 1])); //[ 1, 3, 2, 1, 1, 3, 2, 1 ]

var buildArray = function (nums) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    ans[i] = nums[nums[i]];
  }
  return ans;
};

//console.log(buildArray([5, 0, 1, 2, 3, 4])); //[4,5,0,1,2,3]

var defangIPaddr = function (address) {
  let x = [...address];

  for (let i = 0; i < x.length; i++) {
    if (x[i] === ".") {
      x[i] = "[.]";
    }
  }

  var y = x.join("");
  return y.toString();
};

//console.log(defangIPaddr("1.1.1.1")); //1[.]1[.]1[.]1

var numberOfSteps = function (num) {
  let count = 0;
  while (1) {
    if (num % 2 === 0) {
      if (num === 0) {
        return count;
      }
      count++;
      num = num / 2;
    } else {
      count++;
      num = num - 1;
    }
  }
};

//console.log(numberOfSteps(14)); //6

var xorOperation = function (n, start) {
  let nums = [];

  for (let i = 0; i < n; i++) {
    nums[i] = start + 2 * i;
  }
  let bit = nums[0];
  for (let j = 1; j < n; j++) {
    bit = bit ^ nums[j];
  }
  return bit;
};

//console.log(xorOperation(10, 5));//2
