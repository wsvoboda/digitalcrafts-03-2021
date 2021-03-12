listOfNumbers = list(range(1, 1000))

listToAdd = []
total = 0

for num in listOfNumbers:
    if num % 3 == 0 or num % 5 == 0:
        listToAdd.append(num)

# print(listToAdd) # not necessary to print

for num in range(0, len(listToAdd)):
    total = total + listToAdd[num]

print(total)