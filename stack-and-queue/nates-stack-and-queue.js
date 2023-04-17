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
    return true;
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
    return false;
  }

  // appends new Node to end of LinkedList
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

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
  }


  // insert before function
  // if statement in case insert before node = head
  insertBefore(newValue, insertBeforeValue) {
    const nodeToInsert = new Node(newValue);
    if (this.head.value === insertBeforeValue) {
      nodeToInsert.next = this.head;
      this.head = nodeToInsert;
    } else {
      let current = this.head;
      while (current) {
        if (current.next.value === insertBeforeValue) {
          let insertBeforeNode = current.next;
          let prev = current;
          prev.next = nodeToInsert;
          nodeToInsert.next = insertBeforeNode;
          return;
        } else {
          current = current.next;
        }
      }
    }
  }


  // insert after function
  // if statement in case insert before node = head
  insertAfter(newValue, insertAfterValue) {
    const nodeToInsert = new Node(newValue);
    if (this.head.value === insertAfterValue) {
      let next = this.head.next;
      this.head.next = nodeToInsert;
      nodeToInsert.next = next;
    } else {
      let current = this.head;
      while (current) {
        if (current.value === insertAfterValue) {
          let after = current.next;
          current.next = nodeToInsert;
          nodeToInsert.next = after;
          return;
        } else {
          current = current.next;
        }
      }
    }
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

  countNodes() {
    let numberOfNodes = 0;
    let current = this.head;
    while (current) {
      numberOfNodes++
      current = current.next;
    }
    return numberOfNodes;
  }

  // find kth works for normal values, node to find = head, values out of range
  findKthFromEnd(k) {
    let count = this.countNodes();
    let kthNodeFromHead = count - k;
    if (kthNodeFromHead < 1) {
      console.log('out of range');
      return false;
    } else if (kthNodeFromHead === 1) {
      let current = this.head;
      console.log(current.value);
      return current.value;
    } else {
      let current = this.head;
      for (let j = 1; j < kthNodeFromHead; j++) {
        current = current.next;
      }
      console.log(current.value);
      return current.value;
    }
  }

}


class stackNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    let nodeToPush = new stackNode(data);
    if (!this.top) {
      this.top = nodeToPush;
    } else {
      nodeToPush.next = this.top;
      this.top = nodeToPush;
    }
  }

  pop() {
    if (!this.top) {
      console.error('empty stack');
      return false;
    } else {
      let valToPop = this.top.value;
      this.top = this.top.next;
      return valToPop;
    }
  }

  peek() {
    if (!this.top) {
      console.error('nothing to see');
      return false;
    } else {
      return this.top.value;
    }
  }

  isEmpty() {
    if (!this.top) {
      return true;
    } else {
      return false;
    }

  }
}

class Queue extends LinkedList {
  constructor() {
    super();
    this.top = null;
  }

}



module.exports = {
  LinkedList,
  Node,
  Stack,
  stackNode,
  Queue
}