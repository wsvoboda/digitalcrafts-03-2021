# make a madlib game that accepts a name and a subject

def madlib(name, subject):
    return print(f"{name}'s favorite subject is {subject}.")

madlib("Jenn", "science")

madlib("Jeff", "history")

# convert deg C to deg F and vice versa

def tempConversion(celcius):
    F = (celcius * 9/5) + 32
    print(F)

# tempConversion(100)

def tempConversionTwo(fahrenheit):
    C = (fahrenheit - 32) * 5/9
    print(C)

tempConversionTwo(100)

# is even function

def isEven(num1):
    if (num1 % 2 == 0):
        print("Your number is even.")
    else: 
        print("Your number is odd.")

isEven(20)
isEven(45)

# take in list and return even values from list

randomList = [1, 2, 3, 4, 5, 6, 10, 22, 4545, 245, 151, 1515, 15651, 115151, 1651]

def onlyEvens(list):
    newList = []
    for num in list:
        if num % 2 == 0:
            newList.append(num)
    print(newList)

onlyEvens(randomList)
onlyEvens([2, 6, 12, 34, 55, 67, 123, 4, 22])

# take in list and return odd values from list

def onlyOdds(list):
    newList = []
    for num in list:
        if num % 2 != 0:
            newList.append(num)
    print(newList)

onlyOdds(randomList)
onlyOdds([2, 6, 12, 34, 55, 67, 123, 4, 22])

# take a list and return the smallest number

randomList = [4545, 245, 151, 1515, 15651, 115151, 1651, 2]

def returnSmallestNumber(list):
    list.sort()
    return print(list[0])

returnSmallestNumber(randomList)

# take a list and return the largest number

randomList = [4545, 245, 151, 1515, 15651, 115151, 1651, 2]

def returnLargestNumber(list):
    list.sort()
    return print(list[-1])

returnLargestNumber(randomList)

# take a list of strings and return shortest one

listOfStrings = ["money", "car", "bike", "house", "swimming pool"]

def returnSmallestString(list):
    smallest = min(list, key = len)
    return print(smallest)

returnSmallestString(listOfStrings)

# take a list of strings and return the longest one

listOfStrings = ["money", "car", "bike", "house", "swimming pool"]

def returnLargestString(list):
    largest = max(list, key = len)
    return print(largest)

returnLargestString(listOfStrings)

# 99 bottles of beer song

def bottleLine(i):
    i = i + 1
    while i > 2:
        i -= 1
        print(str(i), "bottles of beer on the wall.", str(i), "bottles of beer.")
    print("1 bottle of beer on the wall. 1 bottle of beer.")
    print("No bottles of beer on the wall. No bottles of beer.")

bottleLine(99)

# print sum of numbers in list

listOfNumbers = [1, 6, 8, 10, 34, 4, 67]

def sumOfNumbers(list):
    total = 0
    for num in list:
        total = total + num
    print(total)

sumOfNumbers(listOfNumbers)

# print positive numbers from list of numbers

listOfNumbers = [-1, 6, 8, -10, 34, -4, 67, 0]

def positiveNumbers(list):
    positiveNums = []
    for num in list:
        if num >= 0:
            positiveNums.append(num)
    print(positiveNums)

positiveNumbers(listOfNumbers)

# take a list of numbers and multiply all numbers by a number

listOfNumbers = [1, 6, 8, 10, 34, 4, 67]

def multiplyNumbers(list, factor):
    multipliedNumbers = []
    for num in list:
        multipliedNumbers.append(num * factor)
    print(multipliedNumbers)

multiplyNumbers(listOfNumbers, 3)

# take a list, flip it, and reverse it :P

stringToReverse = "Howdy There Folks"

def flipList(string):
    return print(string[::-1])

flipList(stringToReverse)

# mutliply vectors

matrix1 = [2, 4, 5]
matrix2 = [2, 3, 6]

def multiplyMatrices(m1, m2):
    resultingMatrix = []
    i = 0
    while i < 3:
        resultingMatrix.append(m1[i] * m2[i])
        i += 1
    print(resultingMatrix)

multiplyMatrices(matrix1, matrix2)

#  remove duplicates from list of strings

listToDeDup = ["carrot", "beet", "potato", "tomato", "pumpkin", "potato", "zucchini", "carrot"]

def deDup(list):
    newList = []
    for string in list:
        if string not in newList:
            newList.append(string)
    return print(newList)

deDup(listToDeDup)

# convert to leetspeak

stringToConvert = "I am practicing functions!"

def leetSpeak(string):
    replacements = (("a", "4"), ("e", "3"), ("g", "6"), ("i", "1"), ("I", "1"), ("o", "0"), ("s", "5"), ("t", "7"))
    newLeetString = string
    for old, new in replacements:
        newLeetString = newLeetString.replace(old, new)
    print(newLeetString)

leetSpeak(stringToConvert)

# replacing double vowels with 5 of the same vowel (ex: good = goooood)

vowels = "This cheese is good"

def doubleVowels(string):
    replacements = (("aa", "aaaaa"), ("ee", "eeeee"), ("ii", "iiiii"), ("oo", "ooooo"), ("u", "uuuuu"))
    newVowelString = string
    for old, new in replacements:
        newVowelString = newVowelString.replace(old, new)
    print(newVowelString)

doubleVowels(vowels)

doubleVowels("spoon")

# Cesar Cipher ROT13 - I found this solution online and don't understand it very well

toDecipher = "lbh zhfg hayrnea jung lbh unir yrnearq"

def caesar(plainText, shift): 
  cipherText = ""
  for letters in plainText:
    if letters.isalpha():
      stayInAlphabet = ord(letters) + shift 
      if stayInAlphabet > ord('z'):
        stayInAlphabet -= 26
      finalLetter = chr(stayInAlphabet)
      cipherText += finalLetter
  print("Your ciphertext is: ", cipherText)
  return cipherText

caesar(toDecipher, 13)


