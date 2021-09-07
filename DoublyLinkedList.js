class NewNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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
    newNode.prev = this.tail;
    this.tail.next = newNode; //First update the tail next address with new Node address then assign the value to the tail
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new NewNode(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }
  remove(index) {
    //Check for params
    const leader = this.traverse(index - 1);
    const unwanted = leader.next;
    const follow = unwanted.next;
    follow.prev = leader;
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
      prev: null,
    };
    const leader = this.traverse(index - 1);

    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;

    // newNode.next = leader.next;
    // newNode.prev = leader.prev;
    // leader.next = newNode;
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

  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = this.head.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;
    return this;
  }
}

const myLinkedList = new DoublyLinkedList(10);

//Append inserting last
myLinkedList.append(5);
myLinkedList.append(16);

/*     Output:-- [ 10, 5, 16, 69 ]  */

//Prepend inserting first

myLinkedList.prepend(15);
myLinkedList.prepend(18); //[ 18, 15, 10, 5, 16 ]
myLinkedList.insert(1, 99); //[ 10, 5, 16, 99, 69 ]
// console.log(myLinkedList.remove(1)); //[ 18, 15, 10, 5, 16 ]
myLinkedList.reverse();
console.log(myLinkedList.printList());
