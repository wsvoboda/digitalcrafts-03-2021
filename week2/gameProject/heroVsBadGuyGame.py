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
# you have chosen "CHARACTER"! You have 2 berries and 2 asprin in your inventory. prepare yourself for battle again ENEMY

# second menu

# you are CHARACTER and have xx life. choose one of the following:

# fight (do damage)
#     default random amount 0-10
#     if they eat 1 berry - random amount 11-20
#     if they eat 2 berries - random amount 21-30
# eat asprin (to heal - gives back 10)
# eat berry (to get strength)
# run away (ends game)

# update status after every turn

# if you run out of life - you die (You are dead! RIP)
# if the baddie runs out of life - they die (You win! Woohoo!)

class GoodGuy:
    def __init__(self, name, power, defense, life):
        self.name = name
        self.power = power
        self.defense = defense
        self.life = life
    
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

    def fightBaddieWithOneBerry(self):
        pass

    def healthYourself(self):
        self.life += 10 

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
    
