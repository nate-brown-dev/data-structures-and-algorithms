'use strict';

const HashTable = require('../hash-table/hash-table');

const LinkedList = require('../hash-table/linked-list');

// write a function that finds common values in 2 binary trees

// application basics

// input: 2 trees

// other data structure: new Hash Table

// other data structure: empty array for output of matches

// application logic

// generate table and define empty array

// traverse the first input tree, and hash all its values in the hash table

// traverse the second input tree, and hash its values

// when there are collisions, check that the keys match. if they match, add to the matches array

// after the second tree is finished traversing, return the matches array