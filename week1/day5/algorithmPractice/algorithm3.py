num1 = 1
num2 = 1
total = 0

while num1 <= 4000000:
    if num1 % 2 == 0:
        total += num1
    num1 = num2
    num2 = num1 + num2
print(total)