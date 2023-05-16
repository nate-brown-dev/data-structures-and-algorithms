'use strict';

const HashTable = require('../hash-table/hash-table');

const LinkedList = require('../hash-table/linked-list');


describe('test hash table', () => {

  test('can set a key-value pair in the hash table', () => {
    let testTable = new HashTable(10);
    let testObject = { "toothpaste": "tube" };
    testTable.set("toothpaste", "tube");
    // console.log(testTable.buckets[1].head.value);
    expect(testTable.buckets[1].head.value).toStrictEqual( { toothpaste: 'tube' } );
  });

  test('can retrieve a value for a given key', () => {
    let testTable = new HashTable(10);
    testTable.set("toothpaste", "tube");
    // console.log(testTable.get("toothpaste"));
    expect(testTable.get("toothpaste")).toStrictEqual("tube");
  });

  test('can return null for key that does not exist in the hashtable', () => {
    let testTable = new HashTable(10);
    testTable.set("toothpaste", "tube");
    // console.log(testTable.get("toothbrush"));
    expect(testTable.get("toothbrush")).toBeNull();
  });

  test('can return list of unique keys in the hashtable', () => {
    let testTable = new HashTable(10);
    testTable.set("toothpaste", "tube");
    console.log(testTable.keys());
    expect(testTable.keys()).toStrictEqual(["toothpaste"]);
  });

  test('can handle a collision by using a linked list for duplicate hash values', () => {
    let testTable = new HashTable(10);
    testTable.set("toothpaste", "tube");
    // add a key-value pair with a duplicate key
    testTable.set("toothpaste", "crest");
    console.log(testTable.buckets[1]);
    // should return the first key-value pair with the duplicate key
    expect(testTable.get("toothpaste")).toStrictEqual("tube");
  });

  test('can generate a key in the range of the hash table', () => {
    let testTable = new HashTable(10);
    let num = testTable.hash("num");
    console.log(num);
    expect(testTable.hash("num")).toBeLessThan(10);
  });

});
