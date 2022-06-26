# Isograms
#
# An isogram is a word that has no repeating letters, consecutive or non-
# consecutive. Implement a function that determines whether a string that
# contains only letters is an isogram. Assume the empty string is an
# isogram. Ignore letter case.
#
# source: https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/python


def is_isogram(string):
    string = string.lower()
    dictionary = {}
    value = 1

    for letter in string:
        if dictionary.get(letter):
            return False
        dictionary[letter] = value
        value += 1

    return True


print(is_isogram('moOse'))
