const array1 = [33, 4, 88, 1, 25];

console.log(array1.map((i) => i + 5).filter((i) => i % 2).length);

// filter first removes the even values then the map adds 5 to the remaining values
// result is 2

// // Substrings

// // Write a function that when given string1 as one parameter and another string2 as a second parameter, checks if string2 is a substring of string1.

const substring = (str1, str2) => {
  const newStr1 = str1.repeat(2);
  let answer = newStr1.includes(str2);
  return answer;
};

console.log(substring("concept", "cep")); // true
console.log(substring("aaabbbaabbab", "aaba")); // false
console.log(
  substring("the brown cow jumped over the moon", "moonthe brown cow")
); // true
console.log(substring("baananana", "nab")); // true
console.log(substring("this wont work", "r u shore")); // false

// Missing Digit

// Write a function that when given a string equation with one digit as an 'x', return the value of 'x' that makes the equation true.

// Answer from class

const findX = (equation) => {
  const split = equation.split(" ");
  const cache = {
    num1: split[0],
    num2: split[2],
    operator: split[1],
    answer: split[4],
  };
  const operatorObject = {
    "*": "/",
    "/": "*",
    "-": "+",
    "+": "-",
  };

  let answer;
  let intendedAnswer;

  if (cache.answer.includes("x")) {
    answer = cache.answer;
    intendedAnswer = eval(split.slice(0, 3).join(" "));
  } else if (cache.num1.includes("x")) {
    answer = cache.num1;
    intendedAnswer = eval(
      `${cache.answer} ${operatorObject[cache.operator]} ${cache.num2}`
    );
  } else if (cache.num2.includes("x")) {
    answer = cache.num2;
    intendedAnswer = eval(
      `${cache.answer} ${operatorObject[cache.operator]} ${cache.num1}`
    );
  }
  const xIndex = answer.toString().indexOf("x");
  return intendedAnswer.toString().charAt(xIndex);
};

// Part 1
console.log(findX("10 * x = 20")); // returns 2
console.log(findX("2 + 4 = x")); // returns 6
console.log(findX("x4 - 11 = 33")); // returns 4
// Part 2
console.log(findX("1x0 * 2 = 200")); // returns 0
console.log(findX("80 / 2 = x0")); // returns 4
console.log(findX("111 + 11x = 222")); // returns 1
