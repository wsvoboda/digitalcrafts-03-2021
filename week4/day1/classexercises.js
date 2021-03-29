// define variables

var phrase = "Hello There";
let num1 = 506;
const fullName = "Whitney Svoboda";

// define an array in javascript

let favoriteFoods = ["pizza", "cake", "chicken wings"];

// define an object in javascript

let vacation = {
  country: "Greece",
  year: 2016,
  lengthOfStay: "1 week",
  cost: 5000,
};

// define an integer

let integer = 4;

// define a string

let string = "Heyyyy";

// re-assign the string you defined above to "This is a new string"

string = "This is a new string";

console.log(string);

// create a new variable that takes your integer above and multiplies it by 5

let newNum = integer * 5;

// Create an array that has the following in it ["swag", 123123, true, false, "boolean"]

let randomArray = ["swag", 123123, true, false, "boolean"];

// print out 123123

console.log(randomArray[1]);

// print out false

console.log(randomArray[3]);

// print out boolean

console.log(randomArray[4]);

// bonus: print out the length of the array

console.log(randomArray.length);

// Create an object that has the following structure name: "name", age: 20, height: 7.1, metric: "ft"

let randomObject = {
  name: "name",
  age: 20,
  height: 7.1,
  metric: "ft",
};

// You will create 5 objects with unique names, with unique ages, height.

let randomObjects = {
  person1: {
    name: "Bob",
    age: 22,
    height: 5.5,
    metric: "ft",
  },
  person2: {
    name: "Jack",
    age: 50,
    height: 4.9,
    metric: "ft",
  },
  person3: {
    name: "Jill",
    age: 21,
    height: 5.2,
    metric: "ft",
  },
  person4: {
    name: "Tommy",
    age: 5,
    height: 3,
    metric: "ft",
  },
  person5: {
    name: "Caroline",
    age: 10,
    height: 1,
    metric: "m",
  },
};

// Print out the first objects name

console.log(randomObjects.person1.name);

// Print out the last objects age

console.log(randomObjects.person5.age);

// print out the 3rd objects height

console.log(randomObjects.person3.height);

// change the 3rd objects height to be 1.2

randomObjects.person3.height = 1.2;
console.log(randomObjects.person3.height);

// change the 3rd objects metric to be "meters"

randomObjects.person3.metric = "m";
console.log(randomObjects.person3.metric);

// create a new key on the 2nd object called sport. Assign it your favorite sport

randomObjects.person2.sport = "volleyball";
console.log(randomObjects.person2.sport);
