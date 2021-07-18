class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      //   console.log(hash);
    }
    return hash;
  }
  set(key, value) {
    let address = this._hash(key); // Just store value of respective key and value in Memory
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
    console.log(currentBucket);
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      //run a loop through the Hashtable size
      if (this.data[i]) {
        // console.log(this.data[i][0][0]);
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
  values() {
    const valuesArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        valuesArray.push(this.data[i][0][1]);
      }
    }
    return valuesArray;
  }
}

const myHashTable = new HashTable(50); //output is [ <1 empty item>, [ [ 'grapes', 10000 ], [ 'apples', 54 ] ] ]

// console.log(myHashTable._hash("grapes"));
// console.log(myHashTable.set("grapes", 10000));
myHashTable.set("grapes", 10000);
myHashTable.set("apples", 54);
myHashTable.set("Oranges", 104);
// console.log(myHashTable.set("apples", 54));
// console.log(myHashTable.get("grapes"));           //10000
console.log(myHashTable.keys()); //To get all keys in Hashtable   //[ 'grapes', 'apples', 'Oranges' ]
console.log(myHashTable.values()); //To get all values in Hashtable //[ 10000, 54, 104 ]
