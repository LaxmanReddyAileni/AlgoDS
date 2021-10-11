// var orderlyQueue = function (s, k) {
//   let c = s[0];
//   let newArray = [];
//   let resultArray = [];
//   if (s.length === 1) {
//     return s;
//   }
//   //   if (s.length > 2) {
//   for (let i = 1; i < s.length; i++) {
//     newArray[i - 1] = s[i];
//   }
//   newArray.push(c);
//   console.log(newArray, s[k]);
//   for (let i = 0; i < s.length; i++) {
//     if (newArray[i] === s[k]) {
//       c = newArray[i];
//     } else {
//       resultArray.push(newArray[i]);
//     }
//   }
//   resultArray.push(c);
//   console.log(resultArray, c);

//   let result = resultArray.join("").toString();
//   return result;
// };
// console.log(orderlyQueue("tk", 1));

var reverse = function (x) {
  let result = [];
  let mai = Math.abs(x);
  let s = "";
  let str = x.toString();
  let count = 0;
  for (let i = 0; i < 10; i++) {
    if (parseInt(str[0]) === i) {
      count = 1;
    }
  }
  if (count === 0) {
    s = "-";
  }
  for (let i = 0; i < mai.toString().length; i++) {
    x = Math.abs(x);
    result[i] = Math.floor(x % 10);
    x = Math.floor(x / 10);
  }

  var j = result.join("");
  var res = s + j.toString();
  // console.log(res, Math.pow(2, 31) - 1, -Math.pow(2, 31));
  if (parseInt(res) > Math.pow(2, 31) - 1 || parseInt(res) < -Math.pow(2, 31)) {
    return 0;
  }
  return res;
};

// console.log(reverse(1534236469));

//arr=[28]

// var sum=(n)=>{
//   let arr=[];
//   let sum=0;
//   for(let j=0;j<n.length;j++){
//     for(let i=0;i<=n[j];i++){
//       if(n[j]%i===0){
// sum+=i;
//       }
//     }
//     arr.push(sum)
//   }
//   console.log(arr)
// }

// sum([12])

// var card = (arr) => {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       continue;
//     } else {
//       count+=1;
//     }
//   }
//   return count;
// };
// console.log(card([0, 0,11]));

function preferredRestaurant(preferences) {
  let map = {};
  for (let i = 0; i < preferences.length; i++) {
    for (let j = 0; j < preferences[i].length; j++) {
      if (map[preferences[i][j]]) {
        map[preferences[i][j]] += preferences[i].length - j;
      } else {
        map[preferences[i][j]] = preferences[i].length - j;
      }
    }
  }
  // console.log(Object.values(map).length);
  let max = -1;
  for (let i = 0; i < Object.values(map).length - 1; i++) {
    // console.log(Object.values(map)[i], Object.values(map)[i + 1]);
    if (Object.values(map)[i] > Object.values(map)[i + 1]) {
      max = Object.keys(map)[i];
    } else {
      continue;
    }
  }
  return max;
}

// preferredRestaurant([
//   [1, 2, 3, 4],
//   [3, 1, 4, 2],
//   [4, 2, 1, 3],
// ]);

// console.log(
//   preferredRestaurant([
//     [1, 2, 3],
//     [2, 3, 1],
//     [3, 1, 2],
//   ])
// );

var relativeSortArray = function (arr1, arr2) {
  let map = {};
  for (let i = 0; i < arr2.length; i++) {
    if (map[arr2[i]]) {
      continue;
    } else {
      map[arr2[i]] = [];
    }
  }
  let endArray = [];
  for (let i = 0; i < arr1.length; i++) {
    if (map[arr1[i]]) {
      map[arr1[i]].push(arr1[i]);
    } else {
      endArray.push(arr1[i]);
    }
  }
  // for(let i=0;i<arr2.length;i++){
  //   if(arr2[i]===)
  // }
  console.log(Object.values(map));
  console.log(endArray);
};

relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]);
//[2,2,2,1,4,3,3,9,6,7,19]