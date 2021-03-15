### First Exercise - divide a number by 2 and give response ###

def printANumber():
    number = input("Give me a number and I will divide it by 2! ")
    product = int(number) // 2
    return print("The response is %s." % product)

printANumber()

### Second Exercise - ask for 2 strings and print them together ###

def addStringsAndPrint():
    string1 = input("What is your first name? ")
    string2 = input("What is your last name? ")
    return print("Your full name is %s %s." % (string1, string2))

addStringsAndPrint()

### Third Exercse - check the length of a string and print it ###

def lengthOfString():
    string = input("Enter a word or phrase and I'll tell you how many characters are in it! ")
    lengthIs = len(string)
    return print("Your entry is %i characters long." % lengthIs)

lengthOfString()

# ## Fourth Exercise - take 2 numbers and add them ###

def addition():
    print("Give me 2 numbers and I will add them together!\n")
    num1 = int(input("What is your first number? "))
    num2 = int(input("What is your second number? "))
    sumOfNums = num1 + num2
    return print("The sum of your two numbers is %i." % sumOfNums)

addition()
