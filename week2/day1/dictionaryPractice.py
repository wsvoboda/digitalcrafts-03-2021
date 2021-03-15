# # digitalCraftsStudent = {
# #     "name": "Whitney",
# #     "city": "Grapevine",
# #     "computer": ["Dell"],
# # }

# # print(digitalCraftsStudent["computer"][0])

# gamer = {
#     "platform": "PC",
#     "gamingHours": [{"weekday": "9-5"}, {"weekends": "anytime"}],
#     "skill": "noob"
# }

# # print(gamer["gamingHours"][1]["weekends"])

# for hours in gamer["gamingHours"]:
#     print(hours)

car = {
    "model": "",
    "image": "https://bit.ly/2OyNcUF",
    "year": "",
    "engineChoices": [

        {
            "v4": {
                "horsepower": 230
            }
        },
        {
            "v6": {
                "horsepower": 300
            }
        },
        {
            "v8": {
                "horsepower": 400
            }
        },
        {
            "v12": {
                "horsepower": 900
            }
        }
    ],

}

# print all engine choices

for choices in car["engineChoices"]:
    print(choices)

# print out horsepower values only

print(car["engineChoices"][0]["v4"]["horsepower"])
print(car["engineChoices"][1]["v6"]["horsepower"])
print(car["engineChoices"][2]["v8"]["horsepower"])
print(car["engineChoices"][3]["v12"]["horsepower"])

# for hpValue in car["engineChoices"]: # teammate method
#     for key,value in hpValue.items():
#         print(value["horsepower"])

# check if a "trim" key exists in dictionary

if "trim" in car:
    print("present")
else:
    print("not present")

# print("trim" in car.values()) # teammate method

# add new key called "colors" with list of 4 color strings

car["colors"] = ["white", "black", "blue", "red"]

# car.update({"colors": ["white", "black", "blue", "red"]}) # teammate method

print(car)
