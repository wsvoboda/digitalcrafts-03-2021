black = "#"
white = " "

# what I want the outcome to be

# print(black, white, black, white, black, white, black, white)
# print(white, black, white, black, white, black, white, black)
# print(black, white, black, white, black, white, black, white)
# print(white, black, white, black, white, black, white, black)
# print(black, white, black, white, black, white, black, white)
# print(white, black, white, black, white, black, white, black)
# print(black, white, black, white, black, white, black, white)
# print(white, black, white, black, white, black, white, black)

# solution with print functions

def printWhiteStart():
    return print(white, black, white, black, white, black, white, black)

def printBlackStart():
    return print(black, white, black, white, black, white, black, white)

# printWhiteStart()
# printBlackStart()

# works but seems too easy

count = 0

while count < 4:
    printWhiteStart()
    printBlackStart()
    count += 1

# my solution with lists

blackStartList = []
whiteStartList = []

while len(blackStartList) < 8:
    blackStartList.append(black)
    blackStartList.append(white)

while len(whiteStartList) < 8:
    whiteStartList.append(white)
    whiteStartList.append(black)

def printBoth():
    counter = 0
    while counter < 4:
        print(blackStartList)
        print(whiteStartList)
        counter += 1

printBoth()

# solution from instructor

def chessboard():
   tile = False
   board = ''
   for i in range(64):
      if (i != 0 and i % 8 == 0) :
         board += "\n"
         tile = not tile
      if tile == True:
         board += " "
      else:
         board += "#"
      tile = not tile
   return board
print(chessboard())
