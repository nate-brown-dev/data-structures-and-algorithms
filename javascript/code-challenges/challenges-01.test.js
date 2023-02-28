'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

Write a function named `addOne` that takes an array of numbers, and returns a new array of the numbers, incremented by 1.

Use `forEach` to loop over the input array and work with each value.  Push the new value into a local array. Return the local array;
------------------------------------------------------------------------------------------------ */

// DONE

const addOne = (arr) => {
  let NEW_ARRAY = [];
  arr.forEach((element) => {
    NEW_ARRAY.push(element + 1);
  });
  return NEW_ARRAY;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named `addExclamation` that takes an array of strings, and returns a new array of the same strings with an "!" added to the end.

Use `forEach` to loop over the input array. Modify each string, and add the updated value into a local array. Return the local array;
------------------------------------------------------------------------------------------------ */

// DONE

const addExclamation = (arr) => {
  let NEW_ARRAY = [];
  arr.forEach((element) => {
    NEW_ARRAY.push(`${element}` + `!`);
  });
  return NEW_ARRAY;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named `allUpperCase` that takes an array of strings, and returns a new array of the strings converted to upper case.

Use `forEach` to loop over the input array. The modified strings should each be added into a local array. Return that local array.
------------------------------------------------------------------------------------------------ */

// DONE

const allUpperCase = (arr) => {
  let NEW_ARRAY = [];
  arr.forEach((element) => {
    NEW_ARRAY.push(element.toUpperCase());
  });
  return NEW_ARRAY;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named `greeting` that takes in a single string and returns the string in all uppercase letters, and followed by an "!".

Then, write a function named `speaker` that takes in an array of strings and a callback function.

Use `forEach` to build a new array of strings, each string modified by the callback. Return the new array.
------------------------------------------------------------------------------------------------ */

// DONE

const greeting = (word) => word.toUpperCase() + `!`;

const speaker = (arr, callback) => {
  let NEW_ARRAY = [];
  arr.forEach((element) => {
    NEW_ARRAY.push(callback(element ));
  });
  return NEW_ARRAY;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named addValues that takes in an array and a value and pushes the value into the array. This function does not need a return statement.

Then, write a function named addNumbers that takes in four arguments:
  - A number to be added to an array
  - An array into which the number should be added
  - The number of times the number should be added
  - A callback function to use to add the numbers to the array (Hint: you already defined it)

Within the addNumbers function, invoke the callback function as many times as necessary, based on the third argument of the addNumbers function.

Return the modified array.
------------------------------------------------------------------------------------------------ */

// DONE
// this function doesn't use forEach and I don't think it can be used here
// when the function runs, it starts with an empty array and forEach can't iterate over empty arrays

const addValues = (arr, value) => {
  arr.push(value);
};

const addNumbers = (num, arr, times, addValues) => {
  for (let i = 0; i < times; i++) {
    addValues(arr, num);
  }
  return arr;
};

/* ------------------------------------------------------------------------------------------------

CHALLENGE 6

Write a function named createList that takes in an array of the current store inventory.

The inventory is formatted like this:
[
  { name: 'apples', available: true },
  { name: 'pears', available: true },
  { name: 'oranges', available: false },
  { name: 'bananas', available: true },
  { name: 'blueberries', available: false }
]

This function should use forEach to populate your grocery list based on the store's inventory. If the item is available, add it to your list. Return the final list.
------------------------------------------------------------------------------------------------ */

// DONE

const createList = (availableItems) => {
  // initialize blank array
  let NEW_ARRAY = [];
  // iterate over the array of objects
  availableItems.forEach((element) => {
    // conditional for available = true
    if (element.available) {
      // if available, add name to array of available products
      NEW_ARRAY.push(element.name);
    }
  });
  // return list of available products
  return NEW_ARRAY;
};

/* ------------------------------------------------------------------------------------------------
STRETCH - CHALLENGE 7

Write a function named fizzbuzz that takes in an array of numbers.

Iterate over the array using forEach to determine the output based on several rules:
  - If a number is divisible by 3, add the word "Fizz" to the output array.
  - If the number is divisible by 5, add the word "Buzz" to the output array.
  - If the number is divisible by both 3 and 5, add the phrase "Fizz Buzz" to the output array.
  - Otherwise, add the number to the output array.

Return the resulting output array.
------------------------------------------------------------------------------------------------ */

// DONE
// separate function to check divisibility of a number using modulo operator %
// if modulus === 0, then the number is evenly divisible by the divisor

const checkModulus = (num, divisor) => {
  if (num % divisor === 0) {
    return true;
  }
};

const fizzbuzz = (arr) => {
  // initialize empty array
  let NEW_ARRAY = [];
  // iterate over the array
  arr.forEach((element) => {
    // check for divisibility by both 3 and 5 first
    if (checkModulus(element, 3) && checkModulus(element, 5)) {
      NEW_ARRAY.push('Fizz Buzz');
    }
    // then check divisibility by 3 and 5 individually
    else if (checkModulus(element, 3)) {
      NEW_ARRAY.push('Fizz');
    }
    else if (checkModulus(element, 5)) {
      NEW_ARRAY.push('Buzz');
    }
    // if not divisible, push element value
    else {
      NEW_ARRAY.push(element);
    }
  });
  // return fizzing and buzzing array
  return NEW_ARRAY;
};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-01.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should return an array with 1 added to each value of the original array', () => {
    expect(addOne([1, 2, 3, 4, 5])).toStrictEqual([2, 3, 4, 5, 6]);
  });
});

describe('Testing challenge 2', () => {
  test('It should return an array with an exclamation point added to each value of the original array', () => {
    expect(addExclamation(['hi', 'how', 'are', 'you'])).toStrictEqual(['hi!', 'how!', 'are!', 'you!']);
  });
});

describe('Testing challenge 3', () => {
  test('It should return an array of uppercase strings', () => {
    expect(allUpperCase(['hi', 'how', 'are', 'you'])).toStrictEqual(['HI', 'HOW', 'ARE', 'YOU']);
  });
});

describe('Testing challenge 4', () => {
  test('It should provide an array of strings, that get uppercased, and a "!" at the end', () => {
    expect(speaker(['hello', '301', 'students'], greeting)).toStrictEqual(['HELLO!', '301!', 'STUDENTS!']);
  });
});

describe('Testing challenge 5', () => {
  test('It should add the number 8 to the array five times', () => {
    expect(addNumbers(8, [], 5, addValues)).toStrictEqual([8, 8, 8, 8, 8]);
    expect(addNumbers(8, [], 5, addValues).length).toStrictEqual(5);
  });
});

describe('Testing challenge 6', () => {
  const inventory = [{ name: 'apples', available: true }, { name: 'pears', available: true }, { name: 'oranges', available: false }, { name: 'bananas', available: true }, { name: 'blueberries', available: false }];

  test('It should only add the available items to the list', () => {
    expect(createList(inventory)).toStrictEqual(['apples', 'pears', 'bananas']);
    expect(createList(inventory).length).toStrictEqual(3);
  });
});

// NATE COMMENT
// test 7 has to be edited so it doesn't get skipped
// the 'x' was removed from 'xdescribe'
describe('Testing challenge 7', () => {
  const inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  test('It should print out messages or numbers', () => {
    expect(fizzbuzz(inputs)).toStrictEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'Fizz Buzz', 16]);
    expect(fizzbuzz(inputs).length).toStrictEqual(16);
  });
});
