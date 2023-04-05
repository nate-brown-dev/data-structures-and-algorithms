# 401 Challenge 02: Array Insert Shift

Write a function called insertShiftArray which takes in an array and a value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

## Whiteboard Process

![Whiteboard](array_insert_shift_whiteboard.png)

## Approach & Efficiency

An array of length `n` has a middle index at `n / 2`. For an array with an odd number of elements, say 5, the middle index would be at 2.5, but the index must be a non-negative integer and 2.5 rounded to 1 significant digit is 3. Thus I applied Math.ceil() on the rounding operation for simplicity.

I approached this problem by thinking in very basic "big o" terms. Taking the array and cutting it in half means the operations are only done on half the array at a time (for huge arrays this would help). In this case it's only push and concat operations.

## Solution

Solution example is shown in the code block on the whiteboard
c;
