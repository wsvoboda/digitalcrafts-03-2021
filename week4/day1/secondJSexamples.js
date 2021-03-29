// string interpolation

// in Python
// print(f"blah blah blah {interpolateThis}")
// print("%s" % valueToInterpolate)

// in JavaScript

let height = "6ft";
let weight = "140lbs";
let joesDimensions = `Joe's height is ${height} and he weighs ${weight}.`;

// let joesDimensions = "Joe's height is " + height + " and he weighs " + weight;

console.log(joesDimensions);

// can define strings using "" '' or ``

console.log(typeof height);

let array = [];

console.log(typeof array); // prints "object" because in JavaScript, everything can be considered an object

// for in is for objects

const pizza = {
  crust: "thin",
  toppings: ["veggies", "cheese", "pepperoni", "sausage"],
  size: "large",
  sauce: ["marinara", "alfredo"],
};

for (const slice in pizza) {
  console.log(slice); // this is how to access the key
  console.log(pizza[slice]); // this is how to access the value of the key you're currently looping on
}

for (const slice in pizza) {
  console.log(pizza[slice]);
}

console.log(Object.keys(pizza)); // prints all keys
console.log(Object.values(pizza)); // prints all values

// for of is for arrays

let cars = ["BMW", "Chevrolet", "Subaru", "Honda"];

console.log(cars[0]); // prints BMW

for (const car of cars) {
  console.log("This is a", car);
}

for (const topping of pizza.toppings) {
  console.log(topping); // prints the toppings from the pizza array
}
