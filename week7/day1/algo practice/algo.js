// take number and add its individual numbers until the response is one digit

// my answer
function digital_root(n) {
  let nAsArray = n.toString().split("");
  let numArray = nAsArray.map((x) => +x);
  let total = numArray.reduce((a, b) => a + b, 0);
  if (total > 9) {
    let totalAsArray = total.toString().split("");
    let totalNumArray = totalAsArray.map((x) => +x);
    let newTotal = totalNumArray.reduce((a, b) => a + b, 0);
    if (newTotal > 9) {
      let anotherTotalAsArray = newTotal.toString().split("");
      let anotherTotalNumArray = anotherTotalAsArray.map((x) => +x);
      let anotherNewTotal = anotherTotalNumArray.reduce((a, b) => a + b, 0);
      return anotherNewTotal;
    } else return newTotal;
  } else return total;
}

// answers from website
function digital_root(n) {
  return ((n - 1) % 9) + 1;
}

function digital_root(n) {
  if (n < 10) return n;

  for (var sum = 0, i = 0, n = String(n); i < n.length; i++)
    sum += Number(n[i]);

  return digital_root(sum);
}

console.log(digital_root(16)); // 7
console.log(digital_root(942)); // 6
console.log(digital_root(132189)); // 6
console.log(digital_root(4345345493193)); // 3

// Morse Code Decoder

let chars = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

decodeMorse = function (morseCode) {
  return morseCode
    .split("  ")
    .map((a) =>
      a
        .split(" ")
        .map((b) => chars[b])
        .join("")
    )
    .join(" ");
};

console.log(decodeMorse(".... . -.--   .--- ..- -.. ."));

// binary addition - take two numbers, add together, give result as binary

function addBinary(a, b) {
  let sum = a + b;
  return sum.toString(2);
}

console.log(addBinary(2, 8)); // 1010
console.log(addBinary(20, 80)); // 1100100
