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



