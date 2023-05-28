'use strict';

const HashTable = require('../hash-table/hash-table');

const LinkedList = require('../hash-table/linked-list');

const { checkForAntonym, leftJoin } = require('./hashmap-left-join');

describe('can left join hash tables', () => {

  test('can join table rows with a key match', () => {
    let leftTable = new HashTable(10);
    let rightTable = new HashTable(10);
    leftTable.set("diligent", "employed");
    rightTable.set("diligent", "idle");
    let result = leftJoin(leftTable, rightTable);
    console.log(result);
    expect(result[0]).toEqual( [ "diligent", "employed", "idle" ] );
  });

  test('can join table rows without a key match', () => {
    let leftTable = new HashTable(10);
    let rightTable = new HashTable(10);
    leftTable.set("outfit", "garb");
    rightTable.set("flow", "jam");
    let result = leftJoin(leftTable, rightTable);
    console.log(result);
    expect(result[0]).toEqual( [ "outfit", "garb", null ] );
  });

});