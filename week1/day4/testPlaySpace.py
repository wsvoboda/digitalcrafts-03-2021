MESSAGE = "\nWelcome to your to do list!\n\nPress 1 to add a new task \nPress 2 to delete a task \nPress 3 to view all tasks\nPress q to quit\n\n"

todos = []

def printToDos():
    print("\nTo do:")
    count = 1
    for todo in todos:
        print("%d - %s - %s" % (count, todo["task"], todo["priority"]))
        count += 1

# def operation(choice, task, priority, taskNum)
#     choice = ""
#     if choice == "1":
#         newTask = {"task": task, "priority": priority}
#         todos.append(newTask)
#         printToDos()
#     elif choice == "2":
#         removeTask = taskNum
#         removeTask -= 1
#         del todos[removeTask]
#         printToDos()
#     elif choice == "3":
#         printToDos()
#     else:
#         print("Try another selection. Choose either 1, 2, 3, or q. ")
#     return print("Your action is complete.")

choice = ""

while(choice != "q"):
    choice = input(MESSAGE)
    if choice == "1":
        newTask = {"task": input("\nWhat do you need to do? "), "priority": input("\nWhat priority does this task have? Choose from low, medium, or high. ")}
        todos.append(newTask)
        printToDos()
    elif choice == "2":
        removeTask = int(input("\nWhat task number would you like to remove? "))
        removeTask -= 1
        del todos[removeTask]
        printToDos()
    elif choice == "3":
        printToDos()
    else:
        print("\nI wish you a productive day!")
    


# newTask = {"task": input("What do you need to do? "), "priority": input("What priority does this task have? Choose from low, medium, or high. ")}

# print(newTask)

# newTask = {"task": "Wash car", "priority": "medium"}
# secondTask = {"task": "Take out trash", "priority": "high"}

# todos = []

# todo.append(newTask)
# todo.append(secondTask)

# print(todo)

# def operation(choice, task, priority)
#     choice = ""
#     if choice == "1":
#         newTask = {"task": input("What do you need to do? "), "priority": input("What priority does this task have? Choose from low, medium, or high. ")}
#         todos.append(newTask)
#         printToDos()
#     elif choice == "2":
#         removeTask = int(input("What task number would you like to remove? "))
#         removeTask -= 1
#         del todos[removeTask]
#         printToDos()
#     elif choice == "3":
#         printToDos()
#     else:
#         print("Try another selection. Choose either 1, 2, 3, or q. ")