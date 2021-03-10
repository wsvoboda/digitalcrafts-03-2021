print("Give me a number and I'll tell you if it's even or odd!")

# If I wanted to check if the value entered was a number, I would use the following:

# userNumber = ''

# while userNumber.isdigit() == False:
#     userNumber = input("Please enter your number: ")
#     print("You entered {}, please enter a whole number.".format(userNumber))

# but I will submit an answer that corresponds to what we did in class.

userNumber = input("Please enter your number: ")
lengthOfUserNumber = len(userNumber)

while (lengthOfUserNumber < 1):
    userNumber = input("Please enter your number: ")
    lengthOfUserNumber = len(userNumber)

if (int(userNumber) % 2) == 0:
    print("Your number is even!")
else:
    print("Your number is odd!")

