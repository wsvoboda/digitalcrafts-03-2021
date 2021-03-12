def calculation(firstNumber, secondNumber, operator):
    answer = ""
    if (operator == "+"):
        answer = int(firstNumber) + int(secondNumber)
    elif (operator == "-"):
        answer = int(firstNumber) - int(secondNumber)
    elif (operator == "*"):
        answer = int(firstNumber) * int(secondNumber)
    elif (operator == "/"):
        answer = int(firstNumber) // int(secondNumber)
    else: 
        print("I don't know that operation.")
    return print("The answer is %s." % (answer))

choice = ""
while (choice != "q"):
    firstNumber = input("What is the first number? ")
    operator = input("What operation would you like to perform? Please enter one of the following (+, -, *, /): ")
    secondNumber = input("What is the second number? ")
    calculation(firstNumber, secondNumber, operator)
    quitMessage = input("Press any key to do another calculation or q to quit. ")
    choice = quitMessage