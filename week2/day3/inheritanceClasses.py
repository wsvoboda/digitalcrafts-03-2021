class Currency: # superclass
    def __init__(self, name, nation, price, quantity):
        self.name = name
        self.nation = nation
        self.price = price
        self.quantity = quantity
    
    def __str__(self):
        return f"""
        {self.name}
        Nation: {self.nation}
        Price: {self.price}
        """

    def print(self):
        return print(f"The value of the {self.name} from {self.nation} is {self.price}. Quantity {self.quantity}.")
    
    def addQuantity(self, amount):
        self.quantity += amount
        return print(f"{amount} was added to {self.name}. It has a new amount of {self.quantity}.")

class CryptoCurrency(Currency): #subclass. Can tell by parentheses
    def goToTheMoon(self): # instances in superclass cannot use this
        self.price = self.price * 10000
        return print(f"{self.name} went to the moon! The new value is {self.price}!")

doge = CryptoCurrency("DogeCoin", "Doge Nation", 5, 1000000)

print(f"The currency is {doge.name}.")
print(f"The price is {doge.price}.")

doge.print()
doge.goToTheMoon()
doge.print()

yen = Currency("Yen", "Japan", 20, 10)
dollar = Currency("Dollar", "USA", 1, 10)
krona = Currency("Krona", "Sweden", 7, 10)

# print(yen)

# print(f"The value of the {yen.name} from {yen.nation} is {yen.price}.")

# yen.print()
# dollar.print()
# krona.print()

# krona.addQuantity(20)