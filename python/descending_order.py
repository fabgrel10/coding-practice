# Descending Order
#
# Your task is to make a function that can take any non-negative integer as an argument
# and return it with its digits in descending order. Essentially, rearrange the digits
# to create the highest possible number.
#
# source: https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/python

from ast import If


def descending_order(num):
    digits = [n for n in str(num)]
    digits.sort(reverse=True)
    highest_num = ''.join(digits)
    return int(highest_num)


print(descending_order(123))
