// Regualr sorting using sort in built method this works with the small data but not bulk data as this takes time.
const letters = ["l", "a", "x", "m", "a", "n"];
const num = [2, 65, 54, 1, 87, 8];
//console.log(letters.sort()); //  [ 'a', 'a', 'l', 'm', 'n', 'x' ]
// console.log(num.sort());//  [ 1, 2, 54, 65, 8, 87 ]  //Wrong sorting
// console.log(
//   num.sort(function (a, b) {
//     return a - b;
//   })
// );
//

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

//Bubble Sort

function bubbleSorting() {
  //O(n^2) Time Complexity //O(1)  Space Complexity
  for (let j = 0; j < numbers.length; j++) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > numbers[i + 1]) {
        //Swap numbers
        let temp = numbers[i];
        numbers[i] = numbers[i + 1];
        numbers[i + 1] = temp;
      }
    }
  }

  return numbers;
}
// console.log(bubbleSorting());

//Selection Sorting

function selectionSorting() {
  //O(n^2)
  for (let i = 0; i < numbers.length - 1; i++) {
    let pivot = numbers[i];
    let index = 0;
    for (let j = i; j < numbers.length; j++) {
      if (pivot > numbers[j]) {
        pivot = numbers[j];
        index = j;
      }
    }
    let temp = numbers[i];
    numbers[i] = pivot;
    numbers[index] = temp;
  }
  return numbers;
}

function selectionSortingMethod2() {
  //O(n^2)
  for (let i = 0; i < numbers.length - 1; i++) {
    let min = i;
    let temp = numbers[i];
    for (let j = i; j < numbers.length; j++) {
      if (numbers[min] > numbers[j]) {
        min = j;
      }
    }

    numbers[i] = numbers[min];
    numbers[min] = temp;
  }
  return numbers;
}

// console.log(selectionSortingMethod2(numbers));

//Insertion Sort   // used for nearly sorted lists

function InsertionSort() {
  //O(n^2)
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > numbers[i + 1]) {
      swap(i);
    }
  }
  return numbers;
}
function swap(i) {
  let temp = numbers[i];
  numbers[i] = numbers[i + 1];
  numbers[i + 1] = temp;
  for (let z = i; z > 0; z--) {
    if (numbers[z] < numbers[z - 1]) {
      let temp = numbers[z];
      numbers[z] = numbers[z - 1];
      numbers[z - 1] = temp;
    }
  }
}

// console.log(InsertionSort());

//Merge sort

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  //Split the array into right and left
  const length = array.length;
  const middle = Math.floor(length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  //Comnpare the two sides
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
console.log(mergeSort(numbers));
