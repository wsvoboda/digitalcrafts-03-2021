firstNameOfUser = input("What is your first name? ")
lengthOfFirstName = len(firstNameOfUser)

while (lengthOfFirstName < 2):
    firstNameOfUser = input("What is your first name? ")
    lengthOfFirstName = len(firstNameOfUser)

lastNameOfUser = input("What is your last name? ")
lengthOfLastName = len(lastNameOfUser)

while (lengthOfLastName < 2):
    lastNameOfUser = input("What is your last name? ")
    lengthOfLastName = len(lastNameOfUser)

print("Your name is %s %s" % (firstNameOfUser, lastNameOfUser))

friendFirstName = input("What is your friend's first name? ")
lengthOfFriendsFirstName = len(friendFirstName)

while (lengthOfFriendsFirstName <2):
    friendFirstName = input("What is your friend's first name? ")
    lengthOfFriendsFirstName = len(friendFirstName)

friendLastName = input("What is your friend's last name? ")
lengthOfFriendsLastName = len(friendLastName)

while (lengthOfFriendsLastName < 2):
    friendLastName = input("What is your friend's last name? ")
    lengthOfFriendsLastName = len(friendLastName)

print("%s %s is friends with %s %s" % (firstNameOfUser, lastNameOfUser, friendFirstName, friendLastName))


