def taxes():
    wage = int(input("What is your income? "))
    taxableIncome = wage - 3500
    if taxableIncome > 80000:
        taxPayable = taxableIncome * 0.45 - 13505
        print(f"You need to pay {taxPayable}")
    elif taxableIncome > 55000:
        taxPayable = taxableIncome * .35 - 5505
        print(f"You need to pay {taxPayable}")
    elif taxableIncome > 35000:
        taxPayable = taxableIncome * .30 - 2755
        print(f"You need to pay {taxPayable}")
    elif taxableIncome > 9000:
        taxPayable = taxableIncome * .25 - 2755
        print(f"You need to pay {taxPayable}")
    elif taxableIncome > 4500:
        taxPayable = taxableIncome * .20 - 1005
        print(f"You need to pay {taxPayable}")
    elif taxableIncome > 1500:
        taxPayable = taxableIncome * .10 - 555
        print(f"You need to pay {taxPayable}")
    elif taxableIncome > 0:
        taxPayable = taxableIncome * 0.03
        print(f"You need to pay {taxPayable}")
    else:
        print("You didn't make enough to be taxed")

taxes()