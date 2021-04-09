// want to know if all letters in test are found in all letters of input

const isAnagram = (input, test) => {
  const simpleInput = input.replace(/[^A-Z0-9]/gi, "");
  const inputAsArray = simpleInput.split("");

  const simpleTest = test.replace(/[^A-Z0-9]/gi, "");
  const testAsArray = simpleTest.split("");

  const casedInputs = inputAsArray
    .map((v) => v.toLowerCase())
    .sort()
    .join(",");

  const casedTest = testAsArray
    .map((v) => v.toLowerCase())
    .sort()
    .join(",");

  if (casedInputs === casedTest) {
    console.log("true");
  } else {
    console.log("false");
  }
};

isAnagram("toast", "stoat"); //true
isAnagram("hello", "oellh"); // true
isAnagram("listen", "lidfje"); // false
isAnagram("Listen", "silent"); // true
isAnagram("dorMITORY", "dirty room"); // true
isAnagram("convers a t i o n", "voices!RANT!ON  !"); // true
isAnagram("dkj fsdjfh", "this doesn't work"); // false

// answer from class

const isAnagram = (str1, str2) => {
  string1 = str1.replace(/[^\w]/g, "").toLowerCase().split("");
  string2 = str2.replace(/[^\w]/g, "").toLowerCase().split("");

  let cache1 = {};

  if (string1.length !== string2.length) {
    return false;
  }

  for (let letter of string1) {
    if (!cache1[letter]) {
      cache1[letter] = 1;
    } else {
      cache1[letter] += 1;
    }
  }

  let cache2 = {};

  for (let letter of string2) {
    if (!cache2[letter]) {
      cache2[letter] = 1;
    } else {
      cache2[letter] += 1;
    }
  }

  for (let key in cache1) {
    if (!(cache1[key] == cache2[key])) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram("toast", "stoat")); //true
console.log(isAnagram("hello", "oellh")); // true
console.log(isAnagram("listen", "lidfje")); // false
console.log(isAnagram("Listen", "silent")); // true
console.log(isAnagram("dorMITORY", "dirty room")); // true
console.log(isAnagram("convers a t i o n", "voices!RANT!ON  !")); // true
console.log(isAnagram("dkj fsdjfh", "this doesn't work")); // false

// want a function that takes an array and returns if there are any repeated numbers, what those numbers are, and how many times they are repeated

// answer from class

function findDuplicates(array) {
  let cache = {};
  for (number of array) {
    if (!cache[number]) {
      cache[number] = 1;
    } else {
      cache[number] += 1;
    }
  }
  let highest = 0;

  for (key in cache) {
    if (cache[key] !== 1) {
      if (cache[key] > highest) {
        highest = cache[key];
      }
      return highest;
    }
  }
}

console.log(findDuplicates([1, 2, 3, 4, 5, 1])); // returns 2. '1' occurs twice
console.log(findDuplicates([1, 2, 2, 2, 2, 3, 2, 3, 2])); // returns 6
console.log(findDuplicates([12, 12, 1, 2, 12, 22, 11])); // returns 3
