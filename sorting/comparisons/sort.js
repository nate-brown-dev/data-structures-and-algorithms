'use strict';

const moviesObject = require('./movies');

const moviesArray = moviesObject.Movies;

console.log(moviesArray);
444.
function sortYear(arr) {
  let n = arr.length;
  let j = 0;
  for ( let i = 0; i < n; i++ ) {
    let changeFlag = false;
    let left = arr[j]
    let right = arr[j+1]
    // console.log(left);
    // console.log(right);
    if ( right && left.year > right.year ) {
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
  // sort code here
  // console.log(arr);
  return arr;
}

console.log(sortYear(moviesArray));

function sortTitle(arr) {
  let n = arr.length;
  let j = 0;
  for ( let i = 0; i < n; i++ ) {
    let changeFlag = false;
    let left = arr[j];
    let right = arr[j+1];
    // console.log(left);
    // console.log(right);

    // let leftTitle = left.title;
    // if (right) { let rightTitle = right.title }
    // if (leftTitle.charAt(3) === ' ') { leftTitle = str.slice(leftTitle(4)) }
    // // console.log(leftTitle);
    // if (right && rightTitle.charAt(3) === ' ') { rightTitle = str.slice(rightTitle(4)) }

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
  // sort code here
  // console.log(arr);
  return arr;
}

// console.log(movies)
console.log(sortTitle(moviesArray));