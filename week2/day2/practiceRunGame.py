# two characters: a hero and a goblin
# goal is to let them fight
# Whoever wins will be printed out in a victory message

# hero has:
    # name
    # attack
    # defense
    # hp

# goblin has:
    # name
    # attack
    # defense
    # hp
    # clan

class Hero:
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp
        self.characterClass = "Hero"

    def takeDamage(self):
        self.hp -= 5

class Goblin:
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp
        self.characterClass = "Goblin"
    
    def takeDamage(self):
        self.hp -= 5

class Knight:
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp
    
def characterAttack(char1, char2):
    print(f"{char1.name} attacks {char2.name}")
    goblin.takeDamage()
    print(f"{char2.name} takes 5 damage")
    print(f"{char2.name} has {char2.hp} remaining")

def victoryMessage(hero, goblin):
    print(f"{hero.name} is the victor and they have slain {goblin.name}")

def characterCreation():
    character = ""
    charName = input("What is your name? ")
    charClass = input("What is your class? Choose from (Hero, Knight, or Goblin) ")
    if charClass == "Knight":
        character = Knight(charName, 10)
    elif charClass == "Hero":
        character = Hero(charName, 10)
    elif charClass == "Goblin":
        character = Goblin(charName, 10)
    else:
        print("Please enter a valid choice.")
    return print(f"Your name is {character.name}, you are a {character.characterClass}, and you have {character.hp} hp. Prepare yourself for battle.")

character = characterCreation()

# print(f"Your name is {character.name}, you are a {character.characterClass}, and you have {character.hp} hp. Prepare yourself for battle.")

# phillip = Hero("Phillip", 20, 50, 100)
# whitney = Hero("Whitney", 10, 50, 100)
# bob = Goblin("BoB", 100, 50, 100, "ugly clan")
# carlo = Knight("Carlo", 80, 30, 100, 100)

# print("The name of this character is", phillip.name)
# print("The name of this character is", whitney.name)
# print("The name of this character is", bob.name)

# I ask the user to type in their name
# I give them health values
# I print out health values
# I set a global variable to be the while loop condition

# while character.hp > 0:
#     print("What would you like to do? ")
#     if


# while randy.hp > 0:
#     characterAttack(phillip, bob)
#     if bob.hp == 0:
#         print("Victory!")