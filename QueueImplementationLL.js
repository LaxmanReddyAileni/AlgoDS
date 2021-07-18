//Queue implementation using Linked List
//Enqueue insert Last
//Dequeue deletion first

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    let newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // const holdingPointer = this.last;
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    // const holdingpointer = this.first; // This is a garbage collected language So JS take car of the holdingPointer
    this.first = this.first.next;
    this.length--;
    return this;
  }
}

const myQueue = new Queue();
myQueue.enqueue("First");
myQueue.enqueue("Second");
myQueue.enqueue("Third");
myQueue.enqueue("Fourth");
myQueue.dequeue();

console.log(myQueue.peek());
