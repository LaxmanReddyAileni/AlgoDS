const str = "Hello This is a basic String";
const str2 = new String("This is a string object");

//console.log(str);  //Hello This is a basic String
//console.log(str2);   //[String: 'This is a string object']

//  ***** Character Access:
//console.log(str.charAt(1)); //e in Hello This is a basic String
//console.log(str[2]); //l in Hello This is a basic String

//  ***** Compare Strings: < , > , === .toUpperCase()

// ***** String Operations:

//console.log(str.concat(" EXTRA ", str2)); //Hello This is a basic String EXTRA This is a string object

// *** Search with in the string
// console.log(str.includes("Hello")); //true
// console.log(str.includes("Hi"));//false

// console.log(str.endsWith("String"));/true

//Find the index with in the string
//console.log(str.indexOf("is")); //8
//console.log(str.lastIndexOf("is"));//11

// ** Replace
//console.log(str.replace("Hello", "Hi")); //Hi This is a basic String

// ** Cut the string at an index
//console.log(str.slice("11")); //is a basic String

//console.log(str.substring(11)); //is a basic String

console.log(str.trim()); // Hello This is a basic String  //Removes unwanted WhiteSpaces
