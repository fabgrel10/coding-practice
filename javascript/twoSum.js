/* **
 * Two Sum
 *
 * Given an array of integers nums and an integer target, return indices of
 * the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you
 * may not use the same element twice.
 *
 * You can return the answer in any order.
 *
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 *
 * Example 2:
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 *
 * Example 3:
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 *
 * source: https://leetcode.com/problems/two-sum/
 */

// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i += 1) {
//     for (let j = 1; j < nums.length; j += 1) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// }

function twoSum(nums, target) {
  const obj = {};
  for (let i = 0; i <= nums.length; i += 1) {
    const targetComplement = target - nums[i];
    if (targetComplement in obj) {
      return [obj[targetComplement], i];
    }
    obj[nums[i]] = i;
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([4, 10, 17, 30, 11], 40));
console.log(twoSum([5, 5], 11));
