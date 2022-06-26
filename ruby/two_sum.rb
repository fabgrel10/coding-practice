#  Two Sum
#
#  Given an array of integers nums and an integer target, return indices of
#  the two numbers such that they add up to target.
#
#  You may assume that each input would have exactly one solution, and you
#  may not use the same element twice.
#
#  You can return the answer in any order.
#
#  Example 1:
#  Input: nums = [2,7,11,15], target = 9
#  Output: [0,1]
#  Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
#
#  Example 2:
#  Input: nums = [3,2,4], target = 6
#  Output: [1,2]
#
#  Example 3:
#  Input: nums = [3,3], target = 6
#  Output: [0,1]
#
#  source: https://leetcode.com/problems/two-sum/

def two_sum(nums, target)
  map = {}
  nums.each_with_index do |val, index|
    return [map[target - val], index] if map.key?(target - val)
    map[val] = index
  end
end

puts two_sum([2, 7, 11, 15], 9)
puts two_sum([3, 2, 4], 6)
puts two_sum([3, 3], 6)
puts two_sum([4, 10, 17, 7, 30, 11], 40)
puts two_sum([5, 5], 11)
