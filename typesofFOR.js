var array = ["N", "M", "O", "P", "L"];

array.forEach((element) => {
  console.log("How is this " + element);
});

for (let arr of array) {
  console.log("Yeh Kaisa hey " + arr);
}

for (let i = 0; i < array.length; i++) {
  console.log("Traditional Way " + array[i]);
}
