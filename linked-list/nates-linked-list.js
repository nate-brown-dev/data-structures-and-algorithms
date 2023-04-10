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
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  // checks to see if value is somewhere in the Linked List
  // returns true if value is found
  // returns false if value is NOT found
  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      } else {
        current = current.next;
      }
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

  // insert node function
  // if new node will become head, specify index to add as 0
  insert(data, index) {
    const nodeToInsert = new Node(data);
    if (index === 0) {
      nodeToInsert.next = this.head;
      this.head = nodeToInsert;
    } else {
      let current = this.head;
      let prev = null;
      let i = 0;
      while (i < index) {
        prev = current;
        current = current.next;
        i++;
      }
      prev.next = nodeToInsert;
      nodeToInsert.next = current;
    }
    // this.size++;
  }

  // collect all values in the list in an array
  collect() {
    let current = this.head;
    let collection = [];
    while (current) {
      collection.push(current.value);
      current = current.next;
    }
    return collection;
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