// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

// Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

// Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.

// Examples:
// tickets([25, 25, 50]) // => YES
// tickets([25, 100]) // => NO
// tickets([25, 25, 50, 50, 100]) // => NO

let peopleInLine = [25, 25, 50, 50, 100];

let ticketPrice = 25;
let possibleBill1 = 25;
let possibleBill2 = 50;
let possibleBill3 = 100;

const tickets = (peopleInLine) => {
  let cache = {};
  if (peopleInLine[0] !== 25) {
    console.log("NO change for others if first person is not 25");
  } else {
    for (let i = 0; i < peopleInLine.length; i++) {
      if (peopleInLine[i] === 25) {
        if (!cache[25]) {
          cache[25] = 1;
        } else {
          cache[25] += 1;
        }
      }
      if (peopleInLine[i] === 50) {
        if (!cache[25]) {
          console.log("NO change for 50");
        } else {
          cache[25] -= 1;
          if (!cache[50]) {
            cache[50] = 1;
          } else {
            cache[50] += 1;
          }
          console.log("YES, change for 50");
        }
      }
      if (peopleInLine[i] === 100) {
        if ((cache[50] && cache[50] < 1) || cache[25] < 3) {
          console.log("NO change for 100");
        } else {
          if (cache[50] && cache[50] > 0 && cache[25] > 0) {
            cache[50] -= 1;
            cache[25] -= 1;
            console.log("YES, change for 100");
          }
          if ((cache[50] && cache[50] === 0) || cache[25] > 3) {
            cache[25] -= 3;
            console.log("YES, change for 100");
          }
        }
      }
    }
  }
  console.log(cache);
};

// need more testing on cases with 25 and 100 only. Other cases working.

tickets(peopleInLine);
