'use strict';

const HashTable = require('../hash-table/hash-table');

const LinkedList = require('../hash-table/linked-list');

const { removePunctuation, checkForDuplicates } = require('../hash-repeat/hash-repeat');

let firstString = "Once upon a time, there was a brave princess who...";

let secondString = "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...";

let thirdString = "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...";

let falseString = "There are no repeated words in this string."


describe('test hash repeat implementation', () => {

  test('can find the first duplicated word in a string', () => {
    let testTable = new HashTable(10);
    let firstStringMod = removePunctuation(firstString);
    let firstStringArray = firstStringMod.split(" ");
    expect(checkForDuplicates(testTable, firstStringArray)).toStrictEqual('a');
  });

  test('can return false if no duplicates in string', () => {
    let falseTable = new HashTable(10);
    let falseStringMod = removePunctuation(falseString);
    let falseStringArray = falseStringMod.split(" ");
    expect(checkForDuplicates(falseTable, falseStringArray)).toBeFalsy();
  });

});

