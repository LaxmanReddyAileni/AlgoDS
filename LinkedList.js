class NewNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    //Head Tail and Length
    (this.head = {
      value: value,
      next: null,
    }),
      (this.tail = this.head);
    this.length = 1;
  }
  append(value) {
    const newNode = new NewNode(value);
    this.tail.next = newNode; //First update the tail next address with new Node address then assign the value to the tail
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new NewNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  remove(index) {
    //Check for params
    const leader = this.traverse(index - 1);
    const unwanted = leader.next;
    leader.next = unwanted.next;
    this.length--;
    return this;
  }
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = {
      value: value,
      next: null,
    };
    const leader = this.traverse(index - 1);
    newNode.next = leader.next;
    leader.next = newNode;
    this.length++;
    return this;
  }

  traverse(index) {
    //check params
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

const myLinkedList = new LinkedList(10);

//Append
myLinkedList.append(5);
myLinkedList.append(16);
// console.log(myLinkedList.append(16));
/*     Output:-- 
LinkedList {
  head: { value: 10, next: { value: 5, next: [Object] } },
  tail: { value: 16, next: null },
  length: 3
}*/

//Prepend

myLinkedList.prepend(15);
myLinkedList.prepend(18); //[ 18, 99, 15, 10, 5, 16 ]
myLinkedList.insert(1, 99); //[ 18, 99, 15, 10, 5, 16 ]
myLinkedList.remove(1); //[ 18, 15, 10, 5, 16 ]
console.log(myLinkedList.printList());
