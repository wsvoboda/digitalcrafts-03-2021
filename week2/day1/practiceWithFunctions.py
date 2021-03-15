# define a function that returns a list

def addToList(item1, item2, item3):
    return print([item1, item2, item3])

addToList("cats", "dogs", "birds")

# define a function that adds two numbers

def addTwoNumbers(num1, num2):
    return print(num1 + num2)

addTwoNumbers(2, 1)

def addTwoNumbersMyWay():
    num1 = int(input("What is your first number? "))
    num2 = int(input("What is your second number? "))
    sumName = num1 + num2
    return print(f"The result is {sumName}.")

addTwoNumbersMyWay()

# define a function that creates a username out of a first and last name

def createUserName(first, last):
    return print(f"Your username is {first + last}.")

createUserName("Joe", "Frasier")

# define a function that creates a list and prints the items in the list

def loopOverList(item1, item2):
    loopList = [item1, item2]
    for word in loopList:
        print(word)

loopOverList("cats", "dogs")

# define a function with 5 dictionaries that returns the words "This function contains 5 dictionaries"

def functionWithDictionaries():
    firstDictionary = {"name": "Whitney"}
    secondDictionary = {"town": "Grapevine"}
    thirdDictionary = {"country": "USA"}
    fourthDictionary = {"favorite color": "pink"}
    fifthDictionary = {"favorite animal": "cat"}
    return print("This function contains 5 dictionaries. There are listed here:", firstDictionary, secondDictionary, thirdDictionary, fourthDictionary, fifthDictionary)

functionWithDictionaries()

# accessing parts of dictionaries

list1 = ["string", 17, True]
dictionary1 = {
    "CS": ["cannoli", "Canada", "countertop"], 
    "operator": {
        "addresses": ["123 Main St", "Springfield", "Missouri"]
    }
}

# print(dictionary1["CS"]) # acesses the dictionary, finds the key called "CS" and prints ["cannoli", "Canada", "countertop"]

for items in dictionary1["CS"]:
    print(items)