// build the linked list class here from scratch

'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    // this.size = 0;
  }

  // travserses across the LinkedList until it reaches the last node
  traverse() {
    let current = this.head;
    while(current) {
      console.log(current.value);
      current = current.next;
    }
  }

  // checks to see if value is somewhere in the Linked List
  // returns true if value is found
  // returns false if value is NOT found
  includes(value) {
    let current = this.head;
    while(current) {
      if (current.value === value) {
        return true;
      } else {
      current = current.next;
      }
      return false;
    }
  }

  // appends new Node to end of LinkedList
  // append(data) {
  //   const newNode = new Node(data);
  //   if(!this.head) {
  //     this.head = newNode;
  //   } else {
  //     let current = this.head;
  //     while (current.next) {
  //       current = current.next;
  //     }
  //     current.next = newNode;
  //   }
  //   // this.size++;
  // }

  insert(data, index) {
    const nodeToInsert = new Node(data);
    if ( index === 0 ) {
      nodeToInsert.next = this.head;
      this.head = nodeToInsert;
    } else {
      let current = this.head;
      let prev = null;
      let i = 0;
      while ( i < index ) {
        prev = current;
        current = current.next;
        i++;
      }
      prev.next = nodeToInsert;
      nodeToInsert.next = current;
    }
    // this.size++;
  }

}

let LinkedListToTest = new LinkedList();

LinkedListToTest.head = new Node('birdbath');
LinkedListToTest.head.next = new Node('vodka');
LinkedListToTest.head.next.next = new Node('toothpick');
LinkedListToTest.head.next.next.next = new Node('olives');
LinkedListToTest.head.next.next.next.next = new Node('olive juice');

console.log('current linked list contains the following ingredients', LinkedListToTest);

LinkedListToTest.traverse();

module.exports = {
  LinkedList,
  Node
}