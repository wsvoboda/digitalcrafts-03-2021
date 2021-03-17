# 1
# Create a User class, that has the ability to print the users name and age

# 2
# Create a TempUser class, that has the ability to only print their name

# 3
# Create a function that as you to give the user a name, and give the 
# user an age, it will then create the user for you, and print it to 
# the screen. The user will have a choice to either be a temp user 
# or a user

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
        print(f"You are a permanent user. Your name is {self.name} and you are {self.age} years old.")

class TempUser:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.type = "temporary"
    
    def printTempName(self):
        print(f"You are a temporary user. Your name is {self.name}.")

whitney = User("Whitney", 34)
taylor = User("Taylor", 24)
randy = TempUser("Randy", 24)

# whitney.printName()
# whitney.printAge()

taylor.printInfo() # response to number 1
randy.printTempName() # response to number 2

def addUserAndType():
    newUser = ""
    newUserName = input("What is your name? ")
    newUserAge = input("What is your age? ")
    newUserType = input("Would you like to be a permanent user or a temporary user? Enter p for permanent and t for temporary: ")
    if newUserType == "p":
        newUser = User(newUserName, newUserAge)
        newUser.printInfo()
    elif newUserType == "t":
        newUser = TempUser(newUserName, newUserAge)
        newUser.printTempName()
    else:
        print("Please enter either p or t!") 
    return ""

addUserAndType() # response to number 3

# make building class and ask for 5 buildings and print their information

class Buildings:
    def __init__(self, height, capacity, sqft):
        self.height = height
        self.capacity = capacity
        self.sqft = sqft
        self.type = "commercial"
        
    def printBuildingInfo(self):
        print(f"Your building is {self.height} ft tall, has a capacity of {self.capacity}, and has {self.sqft} sq ft. It is a {self.type} building.")

# exampleBuilding = Buildings(1000, 200, 10000) # testing functionality
# exampleBuilding.printBuildingInfo() # testing functionality

def makeNewBuilding():
        newBuilding = ""
        newBuildingHeight = int(input("How tall is your building, in feet? "))
        newBuildingCapacity = int(input("What is the capacity of your building? "))
        newBuildingSqft = int(input("How many square feet does your building have? "))
        newBuilding = Buildings(newBuildingHeight, newBuildingCapacity, newBuildingSqft)
        return newBuilding.printBuildingInfo()

# makeNewBuilding() # testing functionality

counter = 0
while counter < 5:
    makeNewBuilding()
    counter += 1 