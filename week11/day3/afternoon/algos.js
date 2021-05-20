// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

let normalString = "How can mirrors be real if our eyes aren't real";
let testString = "this works and i will prove it";

const jadenConversion = (stringToConvert) => {
  let wordsArray = stringToConvert.split(" ");
  let newWordArray = [];
  wordsArray.forEach((word) =>
    newWordArray.push(word.charAt(0).toUpperCase() + word.slice(1))
  );
  console.log(newWordArray.join(" "));
};

jadenConversion(testString);
jadenConversion(normalString);
