# Adjacent Elements Product
#
# Given an array of integers, find the pair of adjacent elements that has the largest
# product and return that product.
#
# Example:
#
# For inputArray = [3, 6, -2, -5, 7, 3], the output should be solution(inputArray) = 21.

def solution(inputArray):
    return (max(inputArray[i] * inputArray[i + 1] for i in range(len(inputArray) - 1)))


print(solution([3, 6, -2, -5, 7, 3]))
