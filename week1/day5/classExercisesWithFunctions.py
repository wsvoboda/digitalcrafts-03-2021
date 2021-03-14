### First Exercise - divide a number by 2 and give response ###

def printANumber(number):
    number = input("Give me a number and I will divide it by 2! ")
    product = int(number) // 2
    return print("The response is %s." % product)

number = ""

printANumber(number)

### Second Exercise - ask for 2 strings and print them together ###

def addStringsAndPrint(string1, string2):
    string1 = input("What is your first name? ")
    string2 = input("What is your last name? ")
    return print("Your full name is %s %s." % (string1, string2))

string1 = ""
string2 = ""

addStringsAndPrint(string1, string2)

### Third Exercse - check the length of a string and print it ###

def lengthOfString(string):
    string = input("Enter a word or phrase and I'll tell you how many characters are in it! ")
    lengthIs = len(string)
    return print("Your entry is %i characters long." % lengthIs)

string = ""

lengthOfString(string)

## Fourth Exercise - take 2 numbers and add them ###

def addition(num1, num2):
    print("Give me 2 numbers and I will add them together!\n")
    num1 = int(input("What is your first number? "))
    num2 = int(input("What is your second number? "))
    sumOfNums = num1 + num2
    return print("The sum of your two numbers is %i." % sumOfNums)

num1 = ""
num2 = ""

addition(num1, num2)
