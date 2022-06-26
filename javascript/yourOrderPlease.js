/*  Your Oder Please!
 *
 * Your task is to sort a given string. Each word in the string will contain
 * a single number. This number is the position the word should have in the
 * result.
 *
 * Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
 *
 * If the input string is empty, return an empty string. The words in the
 * input String will only contain valid consecutive numbers.
 *
 * Examples:
 * "is2 Thi1s T4est 3a" ==> "Thi1s is2 3a T4est"
 * "4of Fo1r pe6ople g3ood th5e the2" ==> "Fo1r the2 g3ood 4of th5e pe6ople"
 * "" ==> ""
 *
 * source: https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript
 */

function order(words) {
  if (!words) {
    return words;
  }

  const wordsArray = words.split(' ');
  const obj = {};

  for (const word of wordsArray) {
    const numberInWord = getNumberInWord(word);
    obj[numberInWord] = word;
  }

  return Object.values(obj).join(' ');
}

function getNumberInWord(str) {
  return str.match(/\d/)[0];
}

console.log(order('is2 Thi1s T4est 3a'));
