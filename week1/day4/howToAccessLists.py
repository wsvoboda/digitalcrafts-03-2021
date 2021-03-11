pets = ["kitty", "doggy", "birb"] #list
dog = pets[1] #access lists using their variable number, starting at 0
print(dog) #if you try to access something outside the list, you get an "out of range" error
demonSpawn = pets[-1] #prints the last item on the list #-2 would print "doggy" because it's second to last
print(demonSpawn) #prints birb
myFavoriteTwoAnimals = pets[0:2] #prints the first and second thing on the list Starts at 0 and prints 2 things.
print(myFavoriteTwoAnimals)
demonSpawns = pets[-3:1] #prints only "kitty" because it's at position -3 and you want just one value
print(demonSpawns) 