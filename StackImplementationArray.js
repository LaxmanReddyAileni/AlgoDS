class Stack {
  constructor() {
    this.length = 0;
    this.data = [];
  }

  push(value) {
    this.data.push(value);
    return this;
  }

  pop() {
    this.data.pop();
    return this;
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

const myStack = new Stack();

myStack.push("google");
myStack.push("Facebook");
myStack.push("Instagram");
myStack.pop();
myStack.pop();

console.log(myStack.peek());
