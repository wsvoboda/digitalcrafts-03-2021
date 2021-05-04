// a narcissistic number is 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153. Make a function that returns true if the input is narcissistic and false if it is not.
// solved

// const narcNum = (num) => {
//   let total = 0;
//   let numArray = num.toString().split("");
//   let length = numArray.length;
//   for (i = 0; i < length; i++) {
//     total += Number(numArray[i]) ** length;
//   }
//   return num === total;
// };

// console.log(narcNum(153));

// take string and replace each character with "(" if it appears once and ")" if it appears more than once
// could not solve

// const duplicateEncode = (word) => {
//   return word
//     .toLowerCase()
//     .split("")
//     .map(function (a, i, w) {
//       return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
//     })
//     .join("");
// };
// console.log(duplicateEncode("recede"));

// Given an array of integers, find the one that appears an odd number of times
// could not solve

// let A = [1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1];
// let A = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];

// const findOdd = (A) => {
//   let obj = {};
//   A.forEach(function (el) {
//     obj[el] ? obj[el]++ : (obj[el] = 1);
//   });

//   for (prop in obj) {
//     if (obj[prop] % 2 !== 0) return Number(prop);
//   }
// };

// console.log(findOdd(A));
