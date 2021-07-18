//Question

//Given an array= [2,5,1,2,3,5,1,2,4];
//It should return 2
//First recurring element

//Given an array= [2,5,1,1,3,5,1,2,4];
//It should return 1

//Given an array=[3,1,5,4,2];
//It should return undefined
/*
function NaiveApproach(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
} //O(n^2)

console.log(NaiveApproach([2, 5, 1, 2, 3, 5, 1, 2, 4]));
*/
function Approach(input) {
  //HashTable Approach
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
    console.log(map);
  }
  return undefined;
} //O(n)

// console.log(Approach([2, 5, 5, 2, 3, 5, 1, 2, 4]));

var numIdenticalPairs = function (nums) {
  let exist = {};
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (exist[nums[i]]) {
      count += exist[nums[i]]++;
      // console.log(count + " " + exist[nums[i]]);
    } else {
      exist[nums[i]] = 1;
    }
  }
  return count;
};

// console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3])); // Output :4

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  console.log(sorted);
  return nums.map((value) => sorted.indexOf(value));

  // let counter = [];
  // for (let i = 0; i < nums.length; i++) {
  //   counter[i] = nums.filter((n) => n < nums[i]).length;
  // }
  // return counter;
  //O(n^2)
  // let count=0
  //let counter=[]
  //  for(let i=0;i<nums.length;i++){
  //   for(let j=0;j<nums.length;j++){
  //       if(nums[i]>nums[j]){
  //           count++;
  //       }
  //   }
  // counter[i]=count;
  // }
  // return counter;

  //O(n^2)
  // let counter=[];

  // for(let i=0;i<nums.length;i++){
  // let count=0
  //   for(let j=0;j<nums.length;j++){
  //       if(nums[i]>nums[j]){
  //           count++;
  //       }
  //   }
  // counter[i]=count;
  // }
  // return counter;
};

// console.log(smallerNumbersThanCurrent([5, 0, 10, 0, 10, 6])); //[ 2, 0, 4, 0, 4, 3 ]

var singleNumber = function (nums) {
  let exist = {};
  for (let i = 0; i < nums.length; i++) {
    if (exist[nums[i]]) {
      exist[nums[i]]++;
    } else {
      exist[nums[i]] = 1;
    }
  }
  console.log(Object.values(exist));
  for (let i = 0; i < Object.values(exist).length; i++) {
    if (Object.values(exist)[i] === 1) {
      return Object.keys(exist)[i];
    }
  }
  // var x = Object.values(exist);

  // if(Object.values(exist)){

  // }
  // return x;
};

//console.log(singleNumber([2, 2, 2, 1])); //1

var restoreString = function (s, indices) {
  let arr = [];
  let existMap = {};
  for (let i = 0; i < s.length; i++) {
    existMap[indices[i]] = s[i];
  }
  return Object.values(existMap).join("");
};
//s = "codeleet", indices = [4,5,6,7,0,2,1,3]
//console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3])); //leetcode

var decompressRLElist = function (nums) {
  let maps = {};
  let list = [];
  for (let i = 0; i < nums.length; i = i + 2) {
    let len = nums[i];
    let value = nums[i + 1];
    // console.log(len, value);
    for (let j = 0; j < len; j++) {
      list.push(value);
    }
  }
  return list;
};
// console.log(decompressRLElist([1, 2, 3, 4]));

var twoSum = function (nums, target) {
  let exist = {}; //HashMap is declared
  for (let i = 0; i < nums.length; i++) {
    //For loop for nums.length
    let value = nums[i]; //Storing a var

    let compli = target - value; // Complimentary pair to be present in Map

    if (exist[compli] !== undefined) {
      console.log("here is " + exist[compli] + i);
      return [exist[compli], i];
    } else {
      exist[value] = i;
    }
  }
};
console.log(twoSum([3, 2, 4], 6));
