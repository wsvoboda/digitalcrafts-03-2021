// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

// Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

// Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.

// Examples:
// tickets([25, 25, 50]) // => YES
// tickets([25, 100]) // => NO
// tickets([25, 25, 50, 50, 100]) // => NO

// let peopleInLine = [25, 50, 25, 100, 25, 25, 50, 100, 25, 25, 25, 100]; // YES
let peopleInLine = [
  25, 50, 25, 100, 25, 25, 50, 100, 25, 25, 50, 100, 25, 25, 25, 100, 25, 50,
  50, 100,
]; // NO

let ticketPrice = 25;
let possibleBill1 = 25;
let possibleBill2 = 50;
let possibleBill3 = 100;

const tickets = (peopleInLine) => {
  let cache = {
    25: 0,
    50: 0,
    100: 0,
  };
  if (peopleInLine[0] !== 25) {
    return "NO";
  } else {
    for (let i = 0; i < peopleInLine.length; i++) {
      if (peopleInLine[i] === 25) {
        cache[25] += 1;
      }
      if (peopleInLine[i] === 50) {
        cache[25] -= 1;
        cache[50] += 1;
        if (cache[25] < 0) {
          return "NO";
        }
      }
      if (peopleInLine[i] === 100) {
        if (cache[50] > 0) {
          cache[50] -= 1;
          cache[25] -= 1;
        } else {
          cache[25] -= 3;
        }
        if (cache[25] < 0) {
          return "NO";
        }
      }
    }
  }
  return "YES";
};

console.log(tickets(peopleInLine));
