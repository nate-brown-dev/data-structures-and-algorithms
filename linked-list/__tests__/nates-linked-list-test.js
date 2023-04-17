'use strict';

// const LinkedListSample = require('../linked-list-sample');
const { LinkedList, Node, zipLists } = require('../nates-linked-list');

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

  test('Can properly insert multiple nodes into linked list', () => {
    let testList = new LinkedList();
    testList.head = new Node('birdbath');
    testList.head.next = new Node('vodka');
    testList.insert('fernet', 1);
    testList.insert('ice', 1);
    expect(testList.head.next.value).toEqual('ice');
  });

  test('Return true when finding value within linked list that exists', () => {
    let testList = new LinkedList();
    testList.head = new Node('birdbath');
    testList.head.next = new Node('vodka');
    console.log(testList.includes('vodka'));
    expect(testList.includes('vodka')).toBeTruthy();
  });

  test('Return false when searching for value in linked list that does not exist', () => {
    let testList = new LinkedList();
    testList.head = new Node('birdbath');
    testList.head.next = new Node('vodka');
    console.log(testList.includes('whiskey'));
    expect(testList.includes('whiskey')).toBeFalsy();
  });

  test('Can properly return collection of all values that exist in linked list', () => {
    let testList = new LinkedList();
    testList.head = new Node('birdbath');
    testList.head.next = new Node('vodka');
    testList.head.next.next = new Node('toothpick');
    expect(testList.collect()).toEqual(
      ['birdbath','vodka','toothpick']
      );
  });

  test('Can add node to end of linked list', () => {
    let testList = new LinkedList();
    testList.head = new Node('birdbath');
    testList.head.next = new Node('vodka');
    testList.append('vermouth');
    expect(testList.head.next.next.value).toEqual('vermouth');
  });

  test('Can add multiple nodes to end of linked list', () => {
    let testList = new LinkedList();
    testList.head = new Node('birdbath');
    testList.head.next = new Node('vodka');
    testList.append('vermouth');
    testList.append('water');
    expect(testList.head.next.next.next.value).toEqual('water');
  });

  test('Can add node to empty list', () => {
    let testList = new LinkedList();
    testList.append('shaker');
    console.log(testList);
    expect(testList.head.value).toEqual('shaker');
  });

  test('Can traverse a list', () => {
    let testList = new LinkedList();
    testList.head = new Node('birdbath');
    testList.head.next = new Node('vodka');
    testList.head.next.next = new Node('toothpick');
    expect(testList.traverse()).toBeTruthy();
  });

  test('Can insert node before selected node', () => {
    let testList = new LinkedList();
    testList.head = new Node('birdbath');
    testList.head.next = new Node('vodka');
    testList.head.next.next = new Node('toothpick');
    testList.insertBefore('ice', 'toothpick');
    // console.log(testList);
    // console.log(testList.collect());
    expect(testList.head.next.next.value).toEqual('ice');
  });


  test('Can insert node after selected node', () => {
    let testList = new LinkedList();
    testList.head = new Node('birdbath');
    testList.head.next = new Node('vodka');
    testList.head.next.next = new Node('toothpick');
    testList.insertAfter('ice', 'toothpick');
    console.log(testList);
    console.log('testlist with node inserted after selected node: ' + testList.collect());
    expect(testList.head.next.next.next.value).toEqual('ice');
  });

  test('Can return value of kth node from tail', () => {
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

  test('Can zip two lists together', () => {
    let testList = new LinkedList();
    testList.head = new Node('birdbath');
    testList.head.next = new Node('vodka');
    testList.head.next.next = new Node('toothpick');
    testList.head.next.next.next = new Node('olives');
    testList.head.next.next.next.next = new Node('olive juice');
    let zipList = new LinkedList();
    zipList.head = new Node('whiskey');
    zipList.head.next = new Node('bitters');
    zipList.head.next.next = new Node('sugar cube');
    zipList.head.next.next.next = new Node('ice');
    zipList.head.next.next.next.next = new Node('orange peel');

    console.log(zipLists(testList, zipList));
  });


})
