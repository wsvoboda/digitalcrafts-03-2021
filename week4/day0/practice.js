// notes from the reading

function sum(x, y) {
  return console.log(x + y);
}

sum(5, 7);

var sumOfNumbers = sum(5, 7);
console.log(sum(5, 7));

var x;
for (x = 0; x < 10; x++) {
  console.log(x);
}

// madlib function

function madlib(name, subject) {
  return console.log(`${name}'s favorite subject in school is ${subject}.`);
}

madlib("Anushka", "art");
madlib("Whitney", "biology");

// tip calculator that gives tip amount only

function tipAmount(amount, serviceLevel) {
  if (serviceLevel == "good") {
    tip = amount * 0.2;
    return tip;
  } else if (serviceLevel == "fair") {
    tip = amount * 0.15;
    return tip;
  } else if (serviceLevel == "bad") {
    tip = amount * 0.1;
    return tip;
  } else {
    return "Please give an accurate service level.";
  }
}

console.log(tipAmount(100, "good"));

// gives total bill amount after adding in tip

function tipAmount(amount, serviceLevel) {
  if (serviceLevel == "good") {
    tip = amount * 1.2;
    return tip;
  } else if (serviceLevel == "fair") {
    tip = amount * 1.15;
    return tip;
  } else if (serviceLevel == "bad") {
    tip = amount * 1.1;
    return tip;
  } else {
    return "Please give an accurate service level.";
  }
}

console.log(tipAmount(100, "good"));

// function to print numbers between x and y using a for loop and while loop

function printNumbers(x, y) {
  for (x = x; x <= y; x++) {
    console.log(x);
  }
}

printNumbers(1, 10);

function printNumbers(x, y) {
  while (x <= y) {
    console.log(x);
    x++;
  }
}

printNumbers(1, 10);

function printSquare(sides) {
  while (x <= sides) {
    console.log(x * "8");
  }
}

// print a square of asterisks

function printSquare(sides) {
  var star = "*";
  var i = 0;

  while (i++ < sides) {
    console.log(star.repeat(sides));
  }
}

printSquare(5);

// print a banner

function printBanner(wordsToPrint) {
  let border = "-";
  return console.log(`
    ${border.repeat(wordsToPrint.length)}
    ${wordsToPrint}
    ${border.repeat(wordsToPrint.length)}
    `);
}

printBanner("- Welcome to DigitalCrafts -");

// leet speak converter

let chars = { a: "4", e: "3", g: "6", i: "1", o: "0", s: "5", t: "7" };

function leetSpeak(stringToChange) {
  stringToChange = stringToChange.replace(/[aegiost]/g, (m) => chars[m]);
  return console.log(stringToChange);
}

leetSpeak("leet");
leetSpeak("i'm practicing functions!!!");

// replace long vowels with longer ones

let chars = { aa: "aaaaa", ee: "eeeee", oo: "ooooo" };

function longVowels(string) {
  string = string.replace(/aa|ee|oo/g, (m) => chars[m]);
  return console.log(string);
}

longVowels("Good");
longVowels("Cheese");

// return positives from an array

let randomArray = [1, -3, 5, -3, 0];

function getPositives(array) {
  let positivesOnly = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
      positivesOnly.push(array[i]);
    }
  }
  return console.log(positivesOnly);
}

getPositives([1, -3, 5, -3, 0]);
getPositives(randomArray);
getPositives([1, 2, 3]);
getPositives([-1, -2, -3]);
