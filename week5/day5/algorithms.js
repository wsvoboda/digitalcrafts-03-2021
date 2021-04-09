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

// want a function that takes an array and returns if there are any repeated numbers, what those numbers are, and how many times they are repeated

// function hasDuplicates(array) {
//   let numsSoFar = [];
//   for (let i = 0; i < array.length; ++i) {
//     let num = array[i];
//     numsSoFar.push(num)
//     if (num in numsSoFar) {
//       return true;
//     }
//      = true;
//   }
//   return false;
// }

// findDuplicates([1, 2, 3, 4, 5, 1]);
// console.log(hasDuplicates([1, 2, 3, 4, 5, 1]));
// console.log(hasDuplicates([1, 2, 3, 4, 5, 1])); // returns 2. '1' occurs twice
// console.log(hasDuplicates([1, 2, 2, 2, 2, 3, 2, 3, 2])); // returns 6
// console.log(hasDuplicates([12, 12, 1, 2, 12, 22, 11])); // returns 3
