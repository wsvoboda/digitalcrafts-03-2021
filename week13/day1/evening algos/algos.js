// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example:

//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4 = 4
//                        // and 4 has only one digit

//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2

//  persistence(4) === 0 // because 4 is already a one-digit number

// const persistence = (num) => {
//   let times = 0;

//   num = num.toString();

//   while (num.length > 1) {
//     times++;
//     num = num
//       .split("")
//       .map(Number)
//       .reduce((a, b) => a * b)
//       .toString();
//   }

//   return times;
// };

// console.log(persistence(4));

// str = "<div><div><b></b></div></p>";

// function StringChallenge(str) {
//   str.replace(/</, "");
//   return str;
// }
// console.log(str);

// console.log(StringChallenge(str));

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

// SOLVED

// function zero(num) {
//   if (!num) {
//     return 0;
//   } else {
//     return eval(num + 0);
//   }
// }
// function one(num) {
//   if (!num) {
//     return 1;
//   } else {
//     return Math.trunc(eval(1 + num));
//   }
// }
// function two(num) {
//   if (!num) {
//     return 2;
//   } else {
//     return Math.trunc(eval(2 + num));
//   }
// }
// function three(num) {
//   if (!num) {
//     return 3;
//   } else {
//     return Math.trunc(eval(3 + num));
//   }
// }
// function four(num) {
//   if (!num) {
//     return 4;
//   } else {
//     return Math.trunc(eval(4 + num));
//   }
// }
// function five(num) {
//   if (!num) {
//     return 5;
//   } else {
//     return Math.trunc(eval(5 + num));
//   }
// }
// function six(num) {
//   if (!num) {
//     return 6;
//   } else {
//     return Math.trunc(eval(6 + num));
//   }
// }
// function seven(num) {
//   if (!num) {
//     return 7;
//   } else {
//     return Math.trunc(eval(7 + num));
//   }
// }
// function eight(num) {
//   if (!num) {
//     return 8;
//   } else {
//     return Math.trunc(eval(8 + num));
//   }
// }
// function nine(num) {
//   if (!num) {
//     return 9;
//   } else {
//     return Math.trunc(eval(9 + num));
//   }
// }

// function plus(num) {
//   return "+" + num;
// }
// function minus(num) {
//   return "-" + num;
// }
// function times(num) {
//   return "*" + num;
// }
// function dividedBy(num) {
//   return "/" + num;
// }

// console.log(zero(times(zero())));

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// SOLVED

// const pigIt = (str) => {
//   let arrayOfStr = str.split(" ");
//   let finalArray = [];
//   for (let i = 0; i < arrayOfStr.length; i++) {
//     if (/[a-zA-Z]/.test(arrayOfStr[i])) {
//       finalArray.push(
//         arrayOfStr[i].slice(1) + arrayOfStr[i].slice(0, 1) + "ay"
//       );
//     }
//     if (!/[a-zA-Z]/.test(arrayOfStr[i])) {
//       finalArray.push(arrayOfStr[i]);
//     }
//   }
//   return finalArray.join(" ");
// };

// console.log(pigIt("O , Pig latin is cool !"));
