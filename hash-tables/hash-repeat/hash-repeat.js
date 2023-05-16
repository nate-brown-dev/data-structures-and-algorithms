'use strict';

const HashTable = require('../hash-table/hash-table');
const LinkedList = require('../hash-table/linked-list');

let firstString = "Once upon a time, there was a brave princess who..."

let secondString = "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only..."

let thirdString = "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York..."

function removePunctuation(str) {
  let newStr = str.replaceAll(",", "")
    .replaceAll(".", "")
    .replaceAll("\"", "")
    .replaceAll("\'", "")
    .toLowerCase();
  return newStr;
}

let firstStringMod = removePunctuation(firstString);
// console.log(firstStringMod);

let firstStringArray = firstStringMod.split(" ");
// console.log(firstStringArray);


let testTable = new HashTable(10);

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


console.log(checkForDuplicates(testTable, firstStringArray));
