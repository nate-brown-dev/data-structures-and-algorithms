'use strict';

let input = [8, 4, 23, 42, 16, 15];

let sorted = [];

let i = 0;

let value;

let temp;

function merge(left, right, input) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {


}

function mergeSort(input) {
  let n = input.length;
  let sorted = [];
  let mid;
  let left = [];
  let right = [];
  if (input.length % 2 === 0) {
    mid = input.length / 2;
  } else {
    mid = Math.floor(input.length / 2);
  }
  left = input[0, ...mid-1];
  right = input[mid, ...n];

  console.log(left);
  console.log(right);

  mergeSort(left);

  mergeSort(right);

  merge(left, right, input);

  // return sorted;
}

// console.log(insertionSort(input));

module.exports = {
  merge,
  mergeSort
};
