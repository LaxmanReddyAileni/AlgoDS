/*
var firstDuplicate = (array) => {
  //   console.log(array);
  let map = {};
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array.length) {
      return [];
    }
    if (map[array[i]]) {
      return array[i];
    } else {
      map[array[i]] = 1;
    }
  }
  return -1;
};
console.log(firstDuplicate([2, 1, 3, 4]));
*/

//Time O(n) space O(1)
// var firstDuplicate = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     if (array[Math.abs(array[i]) - 1] < 0) {
//       return Math.abs(array[i]);
//     } else {
//       array[Math.abs(array[i]) - 1] = -array[Math.abs(array[i]) - 1];
//       console.log(array);
//     }
//   }
//   return -1;
// };

// console.log(firstDuplicate([2, 1, 3, 4, 3, 2]));

// TO be solved 
var numUniqueEmails = function(emails) {
   let localName=[];
let dom=false;
let domain=[]
    for(let i=0;i<emails.length;i++){
        if(emails[i]!='@' && emails[i] !='.' && emails[i]!='+' && dom!=true){
         localName[i]=emails[i];
    }else if(email[i]==='@'){
            dom=true;
        
        }else if(email[i] === '+'){
            
        }
};}

numUniqueEmails(["a@leetcode.com","b@leetcode.com","c@leetcode.com"])