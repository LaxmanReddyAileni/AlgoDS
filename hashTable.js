let user = {
  age: 54,
  name: "Kakashi",
  magic: true,
  scream: function () {
    console.log("Hatagee");
  },
};
//O(1)
// console.log(user.age);
// console.log(user.name);
// console.log(user.magic);
// user.scream();
//

//console.log(Object.keys(user));//[ 'age', 'name', 'magic', 'scream' ]
//console.log(Object.values(user));//[ 54, 'Kakashi', true, [Function: scream] ]
//console.log(Object.entries(user));
/*
[
  [ 'age', 54 ],
  [ 'name', 'Kakashi' ],
  [ 'magic', true ],
  [ 'scream', [Function: scream] ]
]
*/

