// Python

// phrase = "Hello World"
// integer = 2
// boolean = False

// def addTwo(num1, num2):
//     return print(num1 + num2)

// while (pizza < 8):
//     print("Pizza")

// for slice in pizza:
//     print(slice)

// JavaScript

// Define a variable
// variable declaration depends on scope

// var variable. Not really used in the real world
// var hello = "Hello World";

// ES6
// let integer = 2;

// const constant - cannot change later
// const boolean = false;

// let and const have a block scope
// var has a function scope

// functions in JavaScript. Information inside function body (aka inside the curly brackets) does not need to be indented, like in Python.

// function sumNums(num1, num2) {
//   return num1 + num2;
// }

// for loop syntax
// for (first arg: variable we define, we initialize to 0)
// for (second arg: our loop condition, is your loop container [ie an array])
// for (third arg: incremeter, slice++ is equal to slice + 1)

// lexical scope means any variable defined inside a function can be accessed by anything inside the function, including functions inside that function. Cannot be accessed outside of the function.

// lexical scoping: variables declared outside or inside of a function are accessible to children of that function, as long as the variable is defined outside of the child function.

// const pizza = 8;

// let array = [1, 2, 3];

// for (let number = 0; number < array.length; number++) {
//   console.log(number);
// }

// console.log(sumNums(2, 4));

// Python lists are arrays in JavaScript
// list = []
// array = []

let list = [1, 2, 3];

// access items in list using name[index]

console.log(list[0]);

let numbersInAnArray = [1, 5, 7, 9, 10];
let namesInAnArray = [
  "Kendall",
  "Gill",
  "Joey",
  "Carlo",
  "Tay",
  "Taylor",
  "Whitney",
  "Jessica",
];

console.log(namesInAnArray[7]); // cannot use -1 to access the last array item

// dictionary in Python is called an object in JavaScript

// the key is not a string, so it's written without quotes; the value can be anything

let object = { key: "value" };

let classObject = {
  name: "Kendall",
  name: "Gill",
  name: "Joey",
  name: "Carlo",
  name: "Tay",
  name: "Taylor",
  name: "Whitney",
  name: "Jessica",
};

console.log(classObject.name); // prints the last name in the object. No way to access anyone except Jessica. This is a worthless object type

let complexObject = {
  jessica: {
    name: "Jessica",
  },
  whitney: {
    name: "Whitney",
  },
  tay: {
    name: "Tay",
  },
};

console.log(complexObject.whitney.name);

complexObject.tay.name = "TayTay";
complexObject.tay.hometown = "Atlanta"; // objects in JavaScript are accessed by key values. You use dot notation to call the values. You can create a key and value using dot notation. You can reassign values for keys by calling the key and giving it a new value.

console.log(complexObject.tay.hometown); // undefined because there is no hometown under tay
