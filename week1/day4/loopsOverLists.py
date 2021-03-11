pets = ["kitty", "doggy", "birb", "pikachu"]
otherPets = ["mouse", "iguana", "rabbit"]

# print(len(pets)) # gives the number of items in the list called "pets"

# Loop over a list - go over list and do something with every item in list 

# index = 0

# while index < len(pets): # while 0 is < 4
#     pet = pets[index] 
#     print("What pet are you? I'm a %s" % pet)
#     index += 1 # index = index + 1

    # a while loop requires a condition to be met

# for...in loop. better to use than while loops for lists because you do not need a condition. It just stops on its own when it reaches the end of the list

# for pet in pets:
#     print(pet)

# count = 0
# for pet in pets: #creates variable pet. pet in pets, user in users, address in addresses; the singular of the list
#     print("What pet are you? I'm a %s" % pet)
#     print(count)
#     count += 1

# for pet in otherPets:
#     print(pet)

# # How do we combine lists

# combinedLists = pets + otherPets # combine lists
# print(combinedLists)

# pets[0] = "otter" # replaces "kitty" with "otter"
# print(pets)