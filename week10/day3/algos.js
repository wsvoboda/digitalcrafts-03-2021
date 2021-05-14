// Write a function that accepts a number as an argument. The function should then return the factorial of that number. A factorial of a number means to multiply all whole numbers between that number in one. Example: 5! => 5 * 4 * 3 * 2 * 1 = 120.

const factorial = (num) => {
  //   console.log(num * (num - 1) * (num - 2) * (num - 3) * (num - 4));
  let total = 1;
  let newTotal;
  for (let i = 0; i < num; i++) {
    newTotal = total * i;
    total += newTotal;
  }
  console.log(total);
};

// factorial(5) = 5 * 4 * 3 * 2 * 1 = 120
factorial(5);

// Create a JS function to transform the object values to an array

const obj = {
  person: {
    name: "Tyler",
    age: 28,
    height: "180cm",
  },
  hobbies: {
    sport: "Football",
    game: "Overwatch",
  },
};

function objectToArray(object) {
  let array = [];
  for (let key in object) {
    array.push(object[key]);
  }
  return array;
}

console.log(objectToArray(obj));
