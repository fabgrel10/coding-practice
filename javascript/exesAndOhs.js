/* * Exes and Ohs

   * Check to see if a string has the same amount of 'x's and 'o's. The method
   * must return a boolean and be case insensitive. The string can contain any
   * char.
   *
   * source: https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript
   */

function XO(str) {
  const x = str.match(/x/gi);
  const o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

console.log(XO('xo'));
console.log(XO('xxOo'));
console.log(XO('xxxm'));
console.log(XO('Oo'));
console.log(XO('ooom'));
