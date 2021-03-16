# 1
# Create a User class, that has the  ability to print the users name
# the ability to print the users age

# 2
# Create a TempUser class, that has the ability to only print his name.

# 3
#Create a function that as you to give the user a name, and give the 
# user an age, and will then create the user for you, and print it to 
# the screen. The user will have a choice to either be a temp user 
# or a User

class User:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.type = "permanent"
    
    def printName(self):
        print(f"Your name is {self.name}.")
    
    def printAge(self):
        print(f"You are {self.age} years old.")
    
    def printInfo(self):
        print(f"Your name is {self.name} and you are {self.age} years old.")

class TempUser:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.type = "temporary"
    
    def printTempName(self):
        print(f"Your name is {self.name}. You are currently a temporary user.")

# whitney = User("Whitney", 34)
# taylor = User("Taylor", 24)
# randy = TempUser("Randy", 24)

# whitney.printName()
# whitney.printAge()
# taylor.printInfo() # response to number 1
# randy.printTempName() # response to number 2

def addUserAndType():
    newUser = ""
    newUserName = input("What is your name? ")
    newUserAge = input("What is your age? ")
    newUserType = input("Would you like to be a permanent user or a temporary user? Enter p for permanent and t for temporary: ")
    if newUserType == "p":
        newUser = User(newUserName, newUserAge)
        print(f"You are now a user. Your name is {newUser.name} and your age is {newUser.age}.")
    elif newUserType == "t":
        newUser = TempUser(newUserName, newUserAge)
        print(f"You are now a temporary user. Your name is {newUser.name} and your age is {newUser.age}.")
    else:
        print("Please enter either p or t!") 
    return ""

addUserAndType()