//  want a function to take string and reverse it

const string = "hi there";
const string1 = "hello";
const string3 = "hello hello hellooooo";

const stringReversal = (str) => {
  const stringToList = str.split("");

  var returnArray = [];
  for (var i = str.length - 1; i >= 0; i--) {
    returnArray.push(str[i]);
  }
  const completedReverseString = returnArray.join("");

  return completedReverseString;
};

console.log(stringReversal(string));
console.log(stringReversal(string1));
console.log(stringReversal(string3));

//

// take a number and reverse it but keep decimals and negative sign

// const number = 0076;

// const changeSign = () => {
//   if (number < 0) {
//     const noSignNumber = number * -1;
//     return noSignNumber;
//   } else {
//     const noSignNumber = number;
//     return noSignNumber;
//   }
// };

// const noSignNumber = changeSign(number);

// console.log(noSignNumber); // works

// const numberAsString = noSignNumber + "";

// // console.log(numberAsString);

// // console.log(typeof numberAsString); // confirms it changes it to a string

// const arrayOfNums = numberAsString.split("");

// console.log(arrayOfNums);

// const reverseArray = (input) => {
//   var returnArray = [];
//   for (var i = input.length - 1; i >= 0; i--) {
//     returnArray.push(input[i]);
//   }
//   return returnArray;
// };

// const newReversedArray = reverseArray(arrayOfNums);

// console.log(newReversedArray); // testing

// const arrayToString = newReversedArray.join("");

// const noZeros = arrayToString.replace(/^0+|0+$/g, "");

// console.log(noZeros);

// const backToNumber = Number(noZeros);

// const changeSignBack = () => {
//   if (number < 0) {
//     const finalResult = backToNumber * -1;
//     return finalResult;
//   } else {
//     const finalResult = backToNumber;
//     return finalResult;
//   }
// };

// const finalResult = changeSignBack(backToNumber);

// console.log(finalResult);
