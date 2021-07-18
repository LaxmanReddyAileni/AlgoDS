var numJewelsInStones = function (jewels, stones) {
  let maps = {};
  let count = 0;
  for (let i = 0; i < jewels.length; i++) {
    maps[jewels[i]] = 1;
  }
  for (let j = 0; j < stones.length; j++) {
    if (maps[stones[j]]) {
      count++;
    }
  }
  console.log(maps);
  return count;
};

// console.log(numJewelsInStones("z", "ZZ"));

var checkIfPangram = function (sentence) {
  let map = {};
  var arr = "abcdefghijklmnopqrstuvwxyz".split("");
  for (let j = 0; j < sentence.length; j++) {
    map[sentence[j]] = 1;
  }

  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) {
      return false;
    }
  }
  return true;
};
console.log(checkIfPangram("leetcode"));
