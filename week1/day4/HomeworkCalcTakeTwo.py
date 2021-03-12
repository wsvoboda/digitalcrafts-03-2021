firstNumber = input("What is the first number? ")
lengthOfFirstNumber = len(firstNumber)

while (lengthOfFirstNumber < 1):
    firstNumber = input("What is the first number? ")
    lengthOfFirstNumber = len(firstNumber)

operator = input("What operation would you like to perform? Please enter one of the following (+, -, *, /): ")
lengthOfOperator = len(operator)

while (lengthOfOperator != 1):
    operator = input("What operation would you like to perform? Please enter one of the following (+, -, *, /): ")
    lengthOfOperator = len(operator)

secondNumber = input("What is the second number? ")
lengthOfSecondNumber = len(secondNumber)

while (lengthOfSecondNumber < 1):
    secondNumber = input("What is the second number? ")
    lengthOfSecondNumber = len(secondNumber)

def division(firstNumber, secondNumber):
    return print(int(firstNumber) // int(secondNumber))

def addition(firstNumber, secondNumber):
    return print(int(firstNumber) + int(secondNumber))

def multiplication(firstNumber, secondNumber):
    return print(int(firstNumber) * int(secondNumber))

def subtraction(firstNumber, secondNumber):
    return print(int(firstNumber) - int(secondNumber))

if (operator == "/"):
    division(firstNumber, secondNumber)
elif (operator == "*"):
    multiplication(firstNumber, secondNumber)
elif (operator == "+"):
    addition(firstNumber, secondNumber)
elif (operator == "-"):
    subtraction(firstNumber, secondNumber)
else:
    print("I don't understand that operand.")

quitQuestion = input("Press q to quit or c to continue.")

def quitFunction():
    return print("Thank you for using the calculator")

def