/* Jaden Casing Strings
 *
 * Your task is to convert strings to how they would be written by Jaden Smith.
 * The strings are actual quotes from Jaden Smith, but they are not capitalized
 * in the same way he originally typed them.
 *
 * Example:
 * Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
 * Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
 *
 * Source: https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript
 */

const jadenCased = string => {
  const wordsArray = string.split(' ');

  for (let i = 0; i < wordsArray.length; i += 1) {
    wordsArray[i] =
      wordsArray[i].charAt(0).toUpperCase() + wordsArray[i].substring(1);
  }
  return wordsArray.join(' ');
};
