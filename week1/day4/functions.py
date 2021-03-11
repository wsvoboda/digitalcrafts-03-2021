# print(1 + 3) #shows 4 on terminal

# def used to define a function
# need a name, parentheses, and a colon :
# you need a return statement in the body of the function (indented)

# def add(number1, number2):
#     return print(number1 + number2) #can put print here or write it when function is called 

# def addAgain(number3, number4):
#     return (number3 + number4)

# print(addAgain(2, 3))

# def printMessage():
#     return print("haiiiiii")

# printMessage() #calling the function

# add(1, 3)

############## homework ############

# firstNumber = input("Give me a number ")
# secondNumber = input("Give me another number ")
# getOperand = input("Give me an operand ")

# def division(firstNumber, secondNumber):
#     return print(int(firstNumber) // int(secondNumber))

# def addition(firstNumber, secondNumber):
#     return print(int(firstNumber) + int(secondNumber))

# def multiplication(firstNumber, secondNumber):
#     return print(int(firstNumber) * int(secondNumber))

# def subtraction(firstNumber, secondNumber):
#     return print(int(firstNumber) - int(secondNumber))

# if (getOperand == "/"):
#     division(firstNumber, secondNumber)
# elif (getOperand == "*"):
#     multiplication(firstNumber, secondNumber)
# elif (getOperand == "+"):
#     addition(firstNumber, secondNumber)
# elif (getOperand == "-"):
#     subtraction(firstNumber, secondNumber)
# else:
#     "I don't understand that operand."

############## homework ###########

############## class work ###########

# wordFromUser = input("Give me a word! ")

# def giveLength(wordFromUser): 
#     lengthOfWord = len(wordFromUser)
#     return print(str(wordFromUser) + " is " + str(lengthOfWord) + " characters long.")

# giveLength(wordFromUser)

############## class work ###########

# ask for input, take that string and print it out

# askUserToType = input("Type in a word ")
# askUserAgain = input("Type in another word ")

# def printWhatUserTyped (firstMessageTyped, secondMessageTyped):
#     combinedMessage = firstMessageTyped + secondMessageTyped #if you put this on the outside, it is a global variable. Inside the function, it's called a local variable
#     return print(combinedMessage)

# printWhatUserTyped(askUserToType, askUserAgain)

############## class work ###########

numberFromUser = input("Give me a number and I'll divide it by 2! ")

def divideByTwo(givenNumber):
    return print((int(givenNumber)//2))

divideByTwo(numberFromUser)