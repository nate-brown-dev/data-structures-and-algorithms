'use strict';

// const LinkedListSample = require('../linked-list-sample');
const { LinkedList, Node, Stack, stackNode, Queue, queueNode } = require('../nates-stack-and-queue');

describe('Test Linked List data structure', () => {
  xtest('Can instatiate empty linked list', () => {
    let emptyList = new LinkedList();
    expect(emptyList.head).toBeNull;
  });

  xtest('Can properly insert into linked list at specified position', () => {
    let testList = new LinkedList();
    testList.head = new Node('birdbath');
    testList.head.next = new Node('vodka');
    testList.insert('vermouth', 1);
    expect(testList.head.next.value).toEqual('vermouth');
  });

  xtest('Can properly insert into linked list at head / pos 0', () => {
    let testList = new LinkedList();
    testList.head = new Node('birdbath');
    testList.head.next = new Node('vodka');
    testList.insert('shaker', 0);
    expect(testList.head.value).toEqual('shaker');
  });

  xtest('Head property will properly point to first node in linked list', () => {
    let testList = new LinkedList();
    testList.head = new Node('birdbath');
    testList.head.next = new Node('vodka');
    expect(testList.head.value).toEqual('birdbath');
  });

  xtest('Can properly insert multiple nodes into linked list', () => {
    let testList = new LinkedList();
    testList.head = new Node('birdbath');
    testList.head.next = new Node('vodka');
    testList.insert('fernet', 1);
    testList.insert('ice', 1);
    expect(testList.head.next.value).toEqual('ice');
  });

  xtest('Return true when finding value within linked list that exists', () => {
    let testList = new LinkedList();
    testList.head = new Node('birdbath');
    testList.head.next = new Node('vodka');
    console.log(testList.includes('vodka'));
    expect(testList.includes('vodka')).toBeTruthy();
  });

  xtest('Return false when searching for value in linked list that does not exist', () => {
    let testList = new LinkedList();
    testList.head = new Node('birdbath');
    testList.head.next = new Node('vodka');
    console.log(testList.includes('whiskey'));
    expect(testList.includes('whiskey')).toBeFalsy();
  });

  xtest('Can properly return collection of all values that exist in linked list', () => {
    let testList = new LinkedList();
    testList.head = new Node('birdbath');
    testList.head.next = new Node('vodka');
    testList.head.next.next = new Node('toothpick');
    expect(testList.collect()).toEqual(
      ['birdbath', 'vodka', 'toothpick']
    );
  });

  xtest('Can add node to end of linked list', () => {
    let testList = new LinkedList();
    testList.head = new Node('birdbath');
    testList.head.next = new Node('vodka');
    testList.append('vermouth');
    expect(testList.head.next.next.value).toEqual('vermouth');
  });

  xtest('Can add multiple nodes to end of linked list', () => {
    let testList = new LinkedList();
    testList.head = new Node('birdbath');
    testList.head.next = new Node('vodka');
    testList.append('vermouth');
    testList.append('water');
    expect(testList.head.next.next.next.value).toEqual('water');
  });

  xtest('Can add node to empty list', () => {
    let testList = new LinkedList();
    testList.append('shaker');
    console.log(testList);
    expect(testList.head.value).toEqual('shaker');
  });

  xtest('Can traverse a list', () => {
    let testList = new LinkedList();
    testList.head = new Node('birdbath');
    testList.head.next = new Node('vodka');
    testList.head.next.next = new Node('toothpick');
    expect(testList.traverse()).toBeTruthy();
  });

  xtest('Can insert node before selected node', () => {
    let testList = new LinkedList();
    testList.head = new Node('birdbath');
    testList.head.next = new Node('vodka');
    testList.head.next.next = new Node('toothpick');
    testList.insertBefore('ice', 'toothpick');
    // console.log(testList);
    // console.log(testList.collect());
    expect(testList.head.next.next.value).toEqual('ice');
  });


  xtest('Can insert node after selected node', () => {
    let testList = new LinkedList();
    testList.head = new Node('birdbath');
    testList.head.next = new Node('vodka');
    testList.head.next.next = new Node('toothpick');
    testList.insertAfter('ice', 'toothpick');
    console.log(testList);
    console.log('testlist with node inserted after selected node: ' + testList.collect());
    expect(testList.head.next.next.next.value).toEqual('ice');
  });

  xtest('Can return value of kth node from tail', () => {
    let testList = new LinkedList();
    testList.head = new Node('birdbath');
    testList.head.next = new Node('vodka');
    testList.head.next.next = new Node('toothpick');
    testList.head.next.next.next = new Node('olives');
    testList.head.next.next.next.next = new Node('olive juice');
    expect(testList.findKthFromEnd(2)).toEqual('toothpick');
    expect(testList.findKthFromEnd(4)).toEqual('birdbath');
    expect(testList.findKthFromEnd(10)).toBeFalsy();
  });

  test('can push new node onto top of stack', () => {
    let testStack = new Stack();
    testStack.top = new stackNode('birdbath');
    testStack.top.next = new stackNode('vodka');
    testStack.top.next.next = new stackNode('toothpick');
    testStack.top.next.next.next = new stackNode('olives');
    testStack.top.next.next.next.next = new stackNode('olive juice');
    testStack.push('ice');
    expect(testStack.top.value).toEqual('ice');
  });

  test('can pop node from top of stack and return popped value', () => {
    let testStack = new Stack();
    testStack.top = new stackNode('birdbath');
    testStack.top.next = new stackNode('vodka');
    testStack.top.next.next = new stackNode('toothpick');
    testStack.top.next.next.next = new stackNode('olives');
    testStack.top.next.next.next.next = new stackNode('olive juice');
    let poppedValue = testStack.pop();
    expect(poppedValue).toEqual('birdbath');
    expect(testStack.top.value).toEqual('vodka');
  });

  test('can peek at value on top of stack', () => {
    let testStack = new Stack();
    testStack.top = new stackNode('birdbath');
    testStack.top.next = new stackNode('vodka');
    testStack.top.next.next = new stackNode('toothpick');
    testStack.top.next.next.next = new stackNode('olives');
    testStack.top.next.next.next.next = new stackNode('olive juice');
    expect(testStack.peek()).toEqual('birdbath');
  });

  test('can tell if the stack is empty', () => {
    let emptyStack = new Stack();
    let testStack = new Stack();
    testStack.top = new stackNode('birdbath');
    testStack.top.next = new stackNode('vodka');
    testStack.top.next.next = new stackNode('toothpick');
    testStack.top.next.next.next = new stackNode('olives');
    testStack.top.next.next.next.next = new stackNode('olive juice');
    expect(emptyStack.isEmpty()).toBeTruthy();
    expect(testStack.isEmpty()).toBeFalsy();
  });

  test('can enqueue new node to empty queue', () => {
    let emptyQueue = new Queue();
    emptyQueue.enqueue('dog');
    console.log(emptyQueue);
    expect(emptyQueue.front.value).toEqual('dog');
    expect(emptyQueue.back.value).toEqual('dog');
  });

  test('can enqueue new node to existing queue', () => {
    let testQueue = new Queue();
    testQueue.front = new queueNode('cat');
    testQueue.enqueue('fish');
    console.log(testQueue);
    expect(testQueue.back.value).toEqual('fish');
    expect(testQueue.front.value).toEqual('cat');
  });

  test('can dequeue and return value', () => {
    let testQueue = new Queue();
    testQueue.enqueue('rat');
    testQueue.enqueue('mouse');
    console.log(testQueue);
    let deq = testQueue.dequeue();
    console.log(deq);
    console.log(testQueue);
    expect(deq).toEqual('rat');
    expect(testQueue.front.next).toBeNull();
  });


});

