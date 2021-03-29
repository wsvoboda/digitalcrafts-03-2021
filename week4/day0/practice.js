// // notes from the reading

// function sum(x, y) {
//     return console.log(x + y);
//   }

// sum(5,7)

// var sumOfNumbers = sum(5, 7);
// console.log(sum(5, 7));

// var x;
// for (x = 0; x < 10; x++) {
//   console.log(x);
// }

// // madlib function

// function madlib(name, subject) {
//     return console.log(`${name}'s favorite subject in school is ${subject}.`);
// }

// madlib('Anushka', 'art')
// madlib('Whitney', 'biology')

// // tip calculator that gives tip amount only

// function tipAmount(amount, serviceLevel) {
//     if (serviceLevel == 'good') {
//         tip = amount * 0.20;
//         return tip;
//     } else if (serviceLevel == 'fair') {
//         tip = amount * 0.15;
//         return tip;
//     } else if (serviceLevel == 'bad') {
//         tip = amount * 0.10;
//         return tip;
//     } else {
//         return "Please give an accurate service level."
//     }
//     }

// console.log(tipAmount(100, 'good'))

// // gives total bill amount after adding in tip

// function tipAmount(amount, serviceLevel) {
//     if (serviceLevel == 'good') {
//         tip = amount * 1.20;
//         return tip;
//     } else if (serviceLevel == 'fair') {
//         tip = amount * 1.15;
//         return tip;
//     } else if (serviceLevel == 'bad') {
//         tip = amount * 1.10;
//         return tip;
//     } else {
//         return "Please give an accurate service level."
//     }
//     }

// console.log(tipAmount(100, 'good'))

// // function to print numbers between x and y using a for loop and while loop

// function printNumbers(x, y) {
//     for (x = x; x <= y; x ++) {
//         console.log(x)
//     }
// }

// printNumbers(1, 10)

// function printNumbers(x, y) {
//     while (x <= y) {
//         console.log(x);
//         x++;
//     }
// }

// printNumbers(1, 10)

// function printSquare(sides) {
//     while (x <= sides) {
//         console.log(x * "8")
//     }
// }

// // print a square of asterisks

// function printSquare(sides) {
//     var star = "*";
//     var i = 0;

//         while(i++ < sides){
//         console.log(star.repeat(sides));
//     }
// }

// printSquare(5)

// function printBanner(wordsToPrint) {
//   let border = "-";
//   return console.log(`
//     ${border.repeat(wordsToPrint.length)}
//     ${wordsToPrint}
//     ${border.repeat(wordsToPrint.length)}
//     `);
// }

// printBanner("- Welcome to DigitalCrafts -");
