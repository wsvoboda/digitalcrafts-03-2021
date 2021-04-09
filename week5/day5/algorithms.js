// want to know if all letters in test are found in all letters of input

const isAnagram = (input, test) => {
  const inputAsArray = input.split("");
  const testAsArray = test.split("");

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

isAnagram("toast", "stoat");
isAnagram("hello", "oellh"); // true
isAnagram("listen", "lidfje"); // false
isAnagram("Listen", "silent"); // true
