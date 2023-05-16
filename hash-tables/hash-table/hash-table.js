'use strict';

const LinkedList = require('./linked-list');

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    //* convert our string into a number, using the ascii value.
    let sum = 0;
    for (let idx in key) {
      sum += key.charCodeAt(idx);
    }

    //  * multiply by some large prime number.
    //* return the modulo of the size by the large number.
    return (sum * 599) % this.size;
  }

  set(key, value) {
    let position = this.hash(key);

    // check if our bucket is empty or not
    if (!this.buckets[position]) {
      this.buckets[position] = new LinkedList();
    }

    let entry = { [key]: value }
    this.buckets[position].add(entry);
  }

  /**
   * @param {string} key
   */
  get(key) {
    let position = this.hash(key);
    if (!this.buckets[position]) {
      return false;
    } else {
      let current = this.buckets[position].head;
      while (current) {
        if (current.value[key]) {
          return current.value[key];
        } else {
          current = current.next;
        }
      }
    }
  }

  has(key) {
    let position = this.hash(key);
    if (!this.buckets[position]) {
      return false;
    } else {
      let current = this.buckets[position].head;
      while (current) {
        if (current.value[key]) {
          return true;
        } else {
          current = current.next;
        }
      }
    }
  }

  // returns array of keys
  keys() {
    let ARRAY_OF_KEYS = [];
    for (let i in this.buckets) {
      if ( !this.buckets[i] ) {
        continue;
      } else {
        let current = this.buckets[i].head;
        while ( current ) {
          ARRAY_OF_KEYS.push(Object.keys(current.value)[0]);
          current = current.next
        }
      }
    }
    return ARRAY_OF_KEYS;
  };

}


let table = new HashTable(10);

// let position = table.hash('name');
// console.log(position);


table.set('man', 'Nate');
table.set('woman', 'Agnieszka');
console.log(JSON.stringify(table.buckets));
// console.log(table.buckets[position]);

console.log(table.get('man'));
console.log(table.get('woman'));

console.log(table.has('man'));
console.log(table.has('woman'));

console.log(table.keys());
