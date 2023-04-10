// SAMPLE CODE FROM FRIDAY 4/9 IN CLASS DEMO

'use strict';

class NodeSample {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListSample {
  constructor() {
    this.head = null;
  }

  traverse() {
    let current = this.head;
    while(current) {
      console.log(current.value);
      current = current.next;
    }
  }

  includes(value) {
    // if (current.value === value) {

    // }
  }

  append() {}
  insert() {}
}

let linkedListSample = new LinkedListSample();

linkedListSample.head = new NodeSample('knife');
linkedListSample.head.next = new NodeSample('medkit');
linkedListSample.head.next.next = new NodeSample('sandwich');

// console.log('our current linked list: ', linkedList);

linkedListSample.traverse();

module.exports = LinkedListSample;
