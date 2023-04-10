'use strict';

// const LinkedListSample = require('../linked-list-sample');
const { LinkedList, Node } = require('../nates-linked-list');

describe('Test Linked List data structure', () => {
  test('Can instatiate empty linked list', () => {
    let emptyList = new LinkedList();
    expect(emptyList.head).toBeNull;
  });

  test('Can properly insert into linked list at specified position', () => {
    let testList = new LinkedList();
    testList.head = new Node('birdbath');
    testList.head.next = new Node('vodka');
    testList.insert('vermouth', 1);
    expect(testList.head.next.value).toEqual('vermouth');
  });

  test('Can properly insert into linked list at head / pos 0', () => {
    let testList = new LinkedList();
    testList.head = new Node('birdbath');
    testList.head.next = new Node('vodka');
    testList.insert('shaker', 0);
    expect(testList.head.value).toEqual('shaker');
  });

  test('Head property will properly point to first node in linked list', () => {
    let testList = new LinkedList();
    testList.head = new Node('birdbath');
    testList.head.next = new Node('vodka');
    expect(testList.head.value).toEqual('birdbath');
  });

  test('Can properly insert multiple nodes into linked list', () => { });
    let testList = new LinkedList();
    testList.head = new Node('birdbath');
    testList.head.next = new Node('vodka');
    testList.insert('fernet', 1);
    testList.insert('ice', 1);
    expect(testList.head.next.value).toEqual('ice');

  test('Return true when finding value within linked list that exists', () => {
    let testList = new LinkedList();
    testList.head = new Node('birdbath');
    testList.head.next = new Node('vodka');
    console.log(testList.includes('vodka'));
    expect(testList.includes('vodka')).toBeTruthy;
  });

  test('Return false when searching for value in linked list that does not exist', () => {
    let testList = new LinkedList();
    testList.head = new Node('birdbath');
    testList.head.next = new Node('vodka');
    expect(testList.includes('whiskey')).toBeFalsy;
  });

  xtest('Can properly return collection of all values that exist in linked list', () => { });
})
