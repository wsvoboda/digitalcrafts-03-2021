# take user's first name
nameOfUser = input("What is your first name? ") #This will ask the user what their name is and wait for an input. The input will be assigned to the variable
# store the user's first name into a number value that we can use
lengthOfUserName = len(nameOfUser) #tells you how long a variable is. In this case, tells you how long the nameOfUser variable is

while (lengthOfUserName < 1):
    nameOfUser = input("What is your first name? ")
    lengthOfUserName = len(nameOfUser)

lastNameOfUser = input("What is your last name? ")

lengthOfUserLastName = len(lastNameOfUser)

while (lengthOfUserLastName < 1):
    lastNameOfUser = input("What is your last name? ")
    lengthOfUserLastName = len(lastNameOfUser)

print("The user name is %s %s" % (nameOfUser, lastNameOfUser))

# print("Users name is", nameOfUser)

# if lengthOfUserName > 0:
# #     # if this user name length is greater than 0, aka it returns true, we do the code just below
#     nameOfFriend = input("What is your best friend's name? ")
#     print("Your friend's name is", nameOfFriend)
# else:
#     print("Please enter at least one letter... literally just one letter.")


# # # While loop
# # # A condition will have to be true in order to keep it running

# while (lengthofUserName < 0):




# # # take user's last name
# # # store the user's last name into a number value that we can use

# # print("This is the length of the user's first name is", lengthOfUserName)
# # print("This is the length of the user's last name is", lengthOfUserLastName)


# # print("Hello, %s, welcome to Python." % nameOfUser) #Usage of %s is called an f string, you can use %d if you want to insert an integer
# # print("Hello, %s %s, welcome to Python." % (nameOfUser, lastNameOfUser)) #Usage of %s is called an f string, you can use %d if you want to insert an integer
# # if statements do something if a certain condition happens or doesn't happen
# # if statements have if _your condition_ : 
# # else: code goes below it
# # need to indent code under if statement to let the if statement know what code belongs to it


