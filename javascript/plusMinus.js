/* **
 * Plus Minus
 *
 * Given an array of integers, calculate the ratios of its elements that are
 * positive, negative, and zero. Print the decimal value of each fraction on
 * a new line with 6 places after decimal.
 *
 * Example:
 *
 * Sample Input:
 * STDIN           Function
 * -----           --------
 * 6               arr[] size n = 6
 *-4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]
 *
 * Sample output:
 * 0.500000
 * 0.333333
 * 0.166667
 *
 * source: https://www.hackerrank.com/challenges/plus-minus
 */

function plusMinus(arr) {
  let pos = 0;
  let neg = 0;
  let zero = 0;
  const { length } = arr;

  arr.forEach((n) => {
    if (n > 0) pos += 1;
    else if (n < 0) neg += 1;
    else zero += 1;
  });

  console.log((pos / length).toFixed(6));
  console.log((neg / length).toFixed(6));
  console.log((zero / length).toFixed(6));
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]));
