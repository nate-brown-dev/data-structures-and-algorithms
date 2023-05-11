'use strict';

const { insert, insertionSort } = require('./merge-sort');

describe('test insertion sort', () => {

  test('can sort sample array', () => {
    let input = [8, 4, 23, 42, 16, 15];
    console.log(insertionSort(input));
  });

});
