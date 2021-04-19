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

// // answers from website
// function digital_root(n) {
//   return ((n - 1) % 9) + 1;
// }

// function digital_root(n) {
//   if (n < 10) return n;

//   for (var sum = 0, i = 0, n = String(n); i < n.length; i++)
//     sum += Number(n[i]);

//   return digital_root(sum);
// }

console.log(digital_root(16)); // 7
console.log(digital_root(942)); // 6
console.log(digital_root(132189)); // 6
console.log(digital_root(4345345493193)); // 3
