listOfNumbers = list(range(1, 101))

for n, i in enumerate(listOfNumbers):
    if (i % 3 == 0) and (i % 5 == 0):
        listOfNumbers[n] = "FizzBuzz"
    elif i % 5 == 0:
        listOfNumbers[n] = "Buzz"
    elif (i % 3 == 0):
        listOfNumbers[n] = "Fizz"

print(listOfNumbers)