// want to know if all letters in test are found in all letters of input

const isAnagram = (input, test) => {
  const inputAsArray = input.split("");
  const testAsArray = test.split("");

  const sortedInputArray = inputAsArray.sort().join(",");
  const sortedTestArray = testAsArray.sort().join(",");

  if (sortedInputArray === sortedTestArray) {
    console.log("true");
  } else {
    console.log("false");
  }
};

isAnagram("toast", "stoat");

isAnagram("hello", "oellh"); // true
isAnagram("listen", "lidfje"); // false
isAnagram("Listen", "silent"); // true
