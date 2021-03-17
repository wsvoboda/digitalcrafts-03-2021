class Pet:
    def __init__(self, name, fullness=50, happiness=50, hunger=5, mopiness=5):
        self.name = name
        self.fullness = fullness
        self.happiness = happiness
        self.hunger = hunger
        self.mopiness = mopiness
        self.toys = []
    
    def eatFood(self):
        self.fullness += 30
        print(f"{self.name} ate! {self.name}'s fullness increased by 30! It is now {self.fullness}.")
    
    def getLove(self):
        self.happiness += 30
        print(f"{self.name} got love! {self.name}'s happiness increased by 30! It is now {self.happiness}.")
    
    def beAlive(self):
        self.fullness -= self.hunger
        self.happiness -= self.mopiness
        for toy in self.toys:
            self.happiness += toy.use()
        print(f"Just from being alive, {self.name}'s fullness was reduced by {self.hunger} and is now {self.fullness}. {self.name}'s happiness reduced by {self.mopiness} and is now {self.happiness}.")
    
    def showStats(self):
        print(f"{self.name}'s happiness level is {self.happiness} and fullness level is {self.fullness}.")
    
    def __str__(self):
        return """
        %s:
        Fullness: %d
        Happiness: %d
        """ % (self.name, self.fullness, self.happiness)
    
    def getToy(self, toy):
        self.toys.append(toy)

class CuddlyPet(Pet): # tells Python that CuddlyPet inherits from Pet class. CuddlyPet is a subclass.
    def cuddle(self, otherPet): # otherPet is the target of the cuddle
        otherPet.getLove()
    
    def beAlive(self):
        self.fullness -= self.hunger
        self.happiness -= self.mopiness/2 # CuddlyPet will stay happy twice as long as a Pet. This override the beAlive method in Pet.
        for toy in self.toys:
            self.happiness += toy.use()
        print(f"Just from being alive, {self.name}'s fullness was reduced by {self.hunger} and is now {self.fullness}. {self.name}'s happiness reduced by {self.mopiness/2} and is now {self.happiness}.")

class Toy:
    def __init__(self, bonus=10, newness=10):
        self.bonus = 10
        self.newness = 10
    def use(self):
        if self.newness == 0:
            return 0
        else:
            self.newness -= 1
            return self.bonus

pets = []

mainMenu = [
    "Adopt a Pet",
    "Play with Pet", 
    "Feed Pet", 
    "View status of pets",
    "Give a toy to all your pets",
    "Do nothing",
    ]

def printMenuError():
    print("That was not a valid choice. Please try again.\n\n\n")

def choicesToString(choiceList):
    choiceString = ""
    num = 1
    for choice in choiceList:
        choiceString += "%d %s\n" % (num, choice)
        num += 1
    choiceString += "Please choose an option: "
    return choiceString

def getUserChoice(choiceList):
    choice = -1
    choiceString = choicesToString(choiceList)
    while choice == -1:
        try:
            choice = int(input(choiceString))
            if choice <= 0 or choice > len(choiceList):
                raise ValueError
        except ValueError:
            printMenuError()
    return choice

adoptionMenu = [
    "Pet",
    "Cuddly Pet"
]

def main():
    while True:
        choice = getUserChoice(mainMenu)
        if choice == 1:
            petName = input("What would you like to name your pet? ")
            print("Please choose the type of pet:")
            typeChoice = getUserChoice(adoptionMenu)
            if typeChoice == 1:
                pets.append(Pet(petName))
            elif typeChoice == 2:
                pets.append(CuddlyPet(petName))
            print("You now have %d pets." % len(pets))
        if choice == 2:
            for pet in pets:
                pet.getLove()
        if choice == 3:
            for pet in pets:
                pet.eatFood()      
        if choice == 4:
            for pet in pets:
                print(pet)
        if choice == 5:
            for pet in pets:
                pet.getToy(Toy())
        if choice == 6:
            for pet in pets:
                pet.beAlive()

main()

############ practicing functionality below ############

# cujo = Pet("Cujo", 50, 20, 5, 5)
# benji = Pet("Benji", 50, 100, 5, 5)
# lassie = CuddlyPet("Lassie", 100, 100, 20, 20)

# print(cujo.happiness) # checking Cujo's happiness
# lassie.cuddle(cujo) # Lassie cuddling with Cujo
# print(cujo.happiness) # checking Cujo's happiness after cuddle


# lassie.showStats() # testing subclass 
# lassie.beAlive() # testing subclass 
# lassie.showStats() # testing subclass 

# print(cujo.fullness) # initial fullness level is 50
# cujo.eatFood() # this function feeds Cujo and increases his fullness by 30
# print(cujo.fullness) # final fullness level is 80

# cujo.showStats() # testing print stats function
# cujo.eatFood() # testing print statement
# cujo.showStats() # testing print stats after happiness change

