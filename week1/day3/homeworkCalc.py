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

# I want to add something here to check that they entered one of these four options but I don't know how to do that yet.

secondNumber = input("What is the second number? ")
lengthOfSecondNumber = len(secondNumber)

while (lengthOfSecondNumber < 1):
    secondNumber = input("What is the second number? ")
    lengthOfSecondNumber = len(secondNumber)

if (operator == "+"):
    print(int(firstNumber) + int(secondNumber))
elif (operator == "-"):
    print(int(firstNumber) - int(secondNumber))
elif (operator == "*"):
    print(int(firstNumber) * int(secondNumber))
elif (operator == "/"):
    print(int((int(firstNumber) / int(secondNumber))))
else:
    print("I don't understand that operation.")
