# Hero vs Bad Guy Game

# Good Characters vs Bad Characters

# Have menu

# fight, do nothing, run away

# when you die, game ends

# when baddy dies, game ends

# good guy (3 of them - Peach, Mario, Luigi - you can choose one)
#     mario - power 50, defense 50, life 50
#     luigi - power 40, defense 60, life 50
#     peach - power 60, defense 40, life 50

# inventory (everyone starts with 2 berries and 2 asprin)

# bad guy (3 of them - bowser, waluigi, goomba - random)
#     goomba - power 10, defense 10, life 50
#     waluigi - power 50, defense 40, life 50
#     bowser - power 40, defense 60, life 50

# bad guys always attack every turn between 0-15

# first menu

# show name of game
# choose character
# you have chosen "CHARACTER"! You have 2 berries and 2 asprin in your inventory. prepare yourself for battle against ENEMY

# second menu

# you are CHARACTER and have xx life. choose one of the following:

# fight (do damage)
#     default random amount 0-10
#     if they eat 1 berry - random amount 11-20
#     if they eat 2 berries - random amount 21-30
# eat aspirin (to heal - gives back 10)
# eat berry (to get strength)
# run away (ends game)

# update status after every turn

# if you run out of life - you die (You are dead! RIP)
# if the baddie runs out of life - they die (You win! Woohoo!)

class GoodGuy:
    def __init__(self, name, power, defense, life):
        self.name = name
        # self.power = power
        # self.defense = defense
        self.life = life # "life points"
    
    def __str__(self):
        return f"""
        {self.name}
        Life: {self.life}
        Power: {self.power}
        Defense: {self.defense}
        """

    def fightBaddie(self):
        pass
    
    def fightBaddieWithOneBerry(self):
        pass

    def fightBaddieWithTwoBerry(self):
        pass

    def healYourself(self): # working
        self.life += 10 
        return print(f"{self.name} chose to take an asprin! {self.name} now has {self.life} life points.")

class BadGuy:
    def __init__(self, name, power, defense, life):
        self.name = name
        self.power = power
        self.defense = defense
        self.life = life

    def doDamageToGoodGuy(self):
        pass
    
    def __str__(self):
        return f"""
        {self.name}
        Life: {self.life}
        Power: {self.power}
        Defense: {self.defense}
        """
    
mango = GoodGuy("Mango", 50, 50, 50)
peach = GoodGuy("Peach", 40, 60, 50)
cherry = GoodGuy("Cherry", 60, 40, 50)

peanut = BadGuy("Peanut", 10, 10, 50)
cashew = BadGuy("Cashew", 50, 40, 50)
almond = BadGuy("Almond", 40, 60, 50)

def firstMessage():
    print("""
    Welcome to the battle!
    Your opponent will be chosen at random.
    Please choose your warrior!""")
    print(mango, peach, cherry)
    choice = input("Type m for Mango, p for Peach, or c for Cherry: ")
    if choice == "m":
        print("\nYou chose Mango! Your opponent is Peanut!\n\nYou have 2 berries and 2 aspirin in your inventory.\nUse your turn to take a berry to gain strength and inflict more damage.\nUse your turn to take an aspirin to heal yourself and gain life points.")
    elif choice == "p":
        print("\nYou chose Peach! Your opponent is Peanut!\n\nYou have 2 berries and 2 aspirin in your inventory.\nUse your turn to take a berry to gain strength and inflict more damage.\nUse your turn to take an aspirin to heal yourself and gain life points.")
    elif choice == "c":
        print("\nYou chose Cherry! Your opponent is Peanut!\n\nYou have 2 berries and 2 aspirin in your inventory.\nUse your turn to take a berry to gain strength and inflict more damage.\nUse your turn to take an aspirin to heal yourself and gain life points.")
    else:
        print("I don't have a character by that name. Please choose a character.")

firstMessage()

def fightMenu():
    print(f"""
    You are battling! Choose one of the following options:
    1. Fight!
    2. Eat a berry
    3. Take an aspirin
    4. Do nothing
    5. Run away
    """)
    battleChoice = int(input("What will you do? "))
    if battleChoice == 1:
        pass # do damage to enemy
    elif battleChoice == 2:
        pass # increase strength
    elif battleChoice == 3:
        pass # increase life points
    elif battleChoice == 4: 
        pass # do nothing, loop around
    elif battleChoice == 5:
        print("\nGood game! Bye bye ")

fightMenu()
