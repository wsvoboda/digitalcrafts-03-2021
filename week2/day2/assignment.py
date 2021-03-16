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
    
    def printTempName(self):
        print(f"Your name is {self.name}. You are currently a temporary user.")

whitney = User("Whitney", 34)
taylor = User("Taylor", 24)
randy = TempUser("Randy", 24)

# whitney.printName()
# whitney.printAge()
# taylor.printInfo()
# randy.printTempName()

