# petSpider dictionary/class exercise

class Spider:
    def __init__(self, name, strength, defense, hp): # tradition to use "self"
        self.name = name
        self.strength = strength
        self.defense = defense
        self.hp = hp
    
    # feed the spider (every time it eats [function is called], it gains 5 points of strength)
    
    def feedSpider(self):
        print("Omm nom nom nom")
        self.strength += 5
        self.hp += 5

    # play with spider to build defense

    def playedWithSpider(self):
        print("He is getting angry!")
        self.defense += 5

    # make the spider smile

    def smile(self):
        print(f"{self.name} is smiling.")

    # check current stats

    def howIsSpiderDoing(self):
        print("How you doin Spider?")
        print(f"{self.name} has a strength of {self.strength}, a defense of {self.defense}, and has {self.hp} remaining hp.")

class OmegaSpider:
    def __init__(self, name, strength, defense, hp, size):
        self.name = name
        self.strength = strength
        self.defense = defense
        self.hp = hp
        self.size = size
    
    def smile(self):
        print(f"{self.name} is smiling, for once.")

# creating new instances of a spider

peter = Spider("Peter", 20, 10, 100)
mercado = Spider("Mercado", 25, 20, 90)

# creating new instances of an omega spider

beelzebub = OmegaSpider("Beelzebub", 1000, 200, 1000, "10 miles")
carnage = OmegaSpider("Carnage", 100, 100, 100, "big")


print(peter.defense)
peter.playedWithSpider()
print(peter.defense)
peter.howIsSpiderDoing()

print(mercado.defense)
mercado.playedWithSpider()
print(mercado.defense)


carnage.smile()

# dot notation - uses . to reference something within a class

print(peter.name)
print(mercado.name)
print(beelzebub.size)

# stats on spiders (not needed if using classes above)

# petSpider = {
#     "name": "peter",
#     "strength" : 20,
#     "defense": 10,
#     "hp": 100,
# }

# otherPetSpider = {
#     "name": "mercado",
#     "strength" : 25,
#     "defense": 20,
#     "hp": 90,
# }

# fed the spider (every time it eats [function is called], it gains 5 points of strength)

# def feedSpider():
#     print("Omm nom nom nom")
#     petSpider["strength"] += 5
#     petSpider["hp"] += 5

# # play with spider to build defense

# def playedWithSpider():
#     print("He is getting angry!")
#     petSpider["defense"] += 5

# # check current stats

# def howIsSpiderDoing():
#     print("How you doin Spider?")
#     print(petSpider)

# # welcome message for program

# def welcomeMessage():
#     message = int(input("""
#     Please choose from the following:
#     1. Feed Spider
#     2. Play with Spider (he gets angry)
#     3. Check on Spider
#     4. Stare
#     5. Quit
#     """))
#     return message

# choice = ""
# while choice != 5:
#     choice = welcomeMessage()
#     if choice == 1:
#         feedSpider()
#     elif choice == 2:
#         playedWithSpider()
#     elif choice == 3:
#         howIsSpiderDoing()
#     elif choice == 4:
#         print("Staring...")
#     else:
#         pass # stops code

# spider would fight

