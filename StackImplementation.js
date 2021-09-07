//Stack implementation using Linked List
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peep() {
    return this.top;
  }
  push(value) {
    let newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const holdingpointer = this.top; // This is a garbage collected language So JS take car of the holdingPointer
    this.top = this.top.next;
    this.length--;
    return holdingpointer;
  }
}

const myStack = new Stack();
myStack.push("First");
myStack.push("Second");
myStack.push("Third");
myStack.push("Fourth");
myStack.pop();

console.log(myStack);
