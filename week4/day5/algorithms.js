//  want a function to take string and reverse it

const string = "hi there";

console.log(string);

const stringToList = string.split("");

console.log(string.split("")); // testing

const reverseArray = (input) => {
  var returnArray = [];
  for (var i = input.length - 1; i >= 0; i--) {
    returnArray.push(input[i]);
  }
  return returnArray;
};

console.log(reverseArray(stringToList)); // testing

const newReversedArray = reverseArray(stringToList);

console.log(newReversedArray); // testing

const completedReverseString = newReversedArray.join("");

console.log(completedReverseString);

//

// take a number and reverse it but keep decimals and negative sign

const number = -756.65;

const changeSign = () => {
  if (number < 0) {
    const noSignNumber = number * -1;
    return noSignNumber;
  } else {
    const noSignNumber = number;
    return noSignNumber;
  }
};

const noSignNumber = changeSign(number);

console.log(noSignNumber); // works

const numberAsString = noSignNumber + "";

// console.log(numberAsString);

// console.log(typeof numberAsString); // confirms it changes it to a string

const arrayOfNums = numberAsString.split("");

console.log(arrayOfNums);

const reverseArray = (input) => {
  var returnArray = [];
  for (var i = input.length - 1; i >= 0; i--) {
    returnArray.push(input[i]);
  }
  return returnArray;
};

const newReversedArray = reverseArray(arrayOfNums);

console.log(newReversedArray); // testing

const arrayToString = newReversedArray.join("");

const noZeros = arrayToString.replace(/^0+|0+$/g, "");

console.log(noZeros);

const backToNumber = Number(noZeros);

const changeSignBack = () => {
  if (number < 0) {
    const finalResult = backToNumber * -1;
    return finalResult;
  } else {
    const finalResult = backToNumber;
    return finalResult;
  }
};

const finalResult = changeSignBack(backToNumber);

console.log(finalResult);
