const SlidingWindow = (S) => {
  let maxi = 0;
  let set = {};
  let start = 0;

  for (let i = 0; i < S.length; i++) {
let right=S[i];
if(set[right]){
    maxi=Math.max(maxi,i-start+1);
}
set[right]=i;
  }
  return maxi;
};

console.log(SlidingWindow("aabccbb"));
console.log(SlidingWindow("abbbb"));
