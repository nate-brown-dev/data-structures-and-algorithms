'use strict';

const Movies = require('./movies');

console.log(Movies);

function sortYear(arr) {
  let n = arr.length;
  let j = 0;
  for ( let i = 0; i < n; i++ ) {
    let changeFlag = false;
    let left = arr[j]
    let right = arr[j+1]
    if ( right && left.year < right.year ) {
      arr[j] = right;
      arr[j+1] = left;
      j++;
      changeFlag = true;
    } else {
    j++;
    }
    if (changeFlag) {
      sortYear(arr);
    }
  }
  return arr;
}

console.log(sortYear(Movies.Movies));

function sortTitle(arr) {
  let n = arr.length;
  let j = 0;
  for ( let i = 0; i < n; i++ ) {
    let changeFlag = false;
    let left = arr[j];
    let right = arr[j+1];

    if ( right && left.title > right.title ) {
      arr[j] = right;
      arr[j+1] = left;
      j++;
      changeFlag = true;
    } else {
    j++;
    }
    if (changeFlag) {
      sortTitle(arr)
    }
  }
  return arr;
}

console.log(sortTitle(Movies.Movies));

module.exports = {
  sortYear,
  sortTitle
}
