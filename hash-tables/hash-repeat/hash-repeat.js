'use strict';

const HashTable = require('../hash-table/hash-table');
const LinkedList = require('../hash-table/linked-list');

function removePunctuation(str) {
  let newStr = str.replaceAll(",", "")
    .replaceAll(".", "")
    .replaceAll("\"", "")
    .replaceAll("\'", "")
    .toLowerCase();
  return newStr;
}

// let firstStringMod = removePunctuation(firstString);
// // console.log(firstStringMod);

// let firstStringArray = firstStringMod.split(" ");
// // console.log(firstStringArray);


// let testTable = new HashTable(10);

function checkForDuplicates(table, arr) {
  for (let word of arr) {
    let position = table.hash(word)
    let entry = { [word]: word };
    if (!table.buckets[position]) {
      table.buckets[position] = new LinkedList();
    }
    if (table.buckets[position]) {
      let current = table.buckets[position].head;
      while (current) {
        if (current.value[word]) {
          return word;
        } else {
          current = current.next;
        }
      }
    }
    table.buckets[position].add(entry);
  }
  return false;
}

module.exports = {
  removePunctuation,
  checkForDuplicates
};


// console.log(checkForDuplicates(testTable, firstStringArray));
