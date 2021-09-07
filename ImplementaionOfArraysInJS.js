class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    //O(1)
    return this.data[index];
  }
  push(item) {
    //O(1)
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    //O(1)
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
  delete(index) {
    //O(n)
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }
}

const newArr = new MyArray();

console.log(newArr.push(24)); //1
console.log(newArr.push("hi")); //2
console.log(newArr.push("HEY")); //3
console.log(newArr.push("YOU")); //4
console.log("Deleted Item is " + newArr.pop());
console.log(newArr.get(0)); //24
console.log(newArr.delete(0));
console.log(newArr); //MyArray { length: 1, data: { '0': 24 } }
