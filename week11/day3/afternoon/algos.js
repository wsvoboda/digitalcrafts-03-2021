// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

// let normalString = "How can mirrors be real if our eyes aren't real";
// let testString = "this works and i will prove it";

// const jadenConversion = (stringToConvert) => {
//   let wordsArray = stringToConvert.split(" ");
//   let newWordArray = [];
//   wordsArray.forEach((word) =>
//     newWordArray.push(word.charAt(0).toUpperCase() + word.slice(1))
//   );
//   console.log(newWordArray.join(" "));
// };

// jadenConversion(testString);
// jadenConversion(normalString);

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

const str = "DDeeeermatoglyphicss";

const isIsogram = (str) => {
  let lowerString = str.toLowerCase();
  let cache = {};
  for (let letter of lowerString) {
    if (!cache[letter]) {
      cache[letter] = 1;
    } else {
      cache[letter] += 1;
    }
  }
  console.log(cache);
};

console.log(isIsogram(str));
console.log(isIsogram(str));
