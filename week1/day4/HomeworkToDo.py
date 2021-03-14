MESSAGE = "\nWelcome to your to do list!\n\nPress 1 to add a new task \nPress 2 to delete a task \nPress 3 to view all tasks\nPress q to quit\n\n"

todos = []

def printToDos():
    print("\nTo do:\n")
    count = 1
    for todo in todos:
        print("%d - %s - %s\n" % (count, todo["task"], todo["priority"]))
        count += 1

def decisionFromChoice(choice):
    if choice == "1":
        newTask = {"task": input("\nWhat do you need to do? "), "priority": input("\nWhat priority does this task have? Choose from low, medium, or high. ")}
        todos.append(newTask)
        print("\nHere is your updated to do list: ")
    elif choice == "2":
        removeTask = int(input("\nWhat task number would you like to remove? "))
        removeTask -= 1
        del todos[removeTask]
    elif choice == "3":
        print("\nHere are your tasks to be done: ")
    return printToDos()

choice = ""
while (choice != "q"):
    choice = input(MESSAGE)
    decisionFromChoice(choice)
    quitMessage = input("Press any key to see the start menu again or enter q to quit. ")
    choice = quitMessage


############ this was my previous response ############

# choice = ""
# while(choice != "q"):
#     choice = input(MESSAGE)
#     if choice == "1":
#         newTask = {"task": input("\nWhat do you need to do? "), "priority": input("\nWhat priority does this task have? Choose from low, medium, or high. ")}
#         todos.append(newTask)
#         printToDos()
#     elif choice == "2":
#         removeTask = int(input("\nWhat task number would you like to remove? "))
#         removeTask -= 1
#         del todos[removeTask]
#         printToDos()
#     elif choice == "3":
#         printToDos()
#     else:
#         print("\nI wish you a productive day!")