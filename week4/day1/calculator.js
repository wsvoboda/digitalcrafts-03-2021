function calculate(operation, num1, num2) {
  if (operation === "mutliply") {
    result = num1 * num2;
    console.log(
      `You chose multiplication. The result of ${num1} times ${num2} is ${result}.`
    );
  } else if (operation === "divide") {
    result = num1 / num2;
    console.log(
      `You chose division. The result of ${num1} divided by ${num2} is ${result}.`
    );
  } else if (operation === "add") {
    result = num1 + num2;
    console.log(
      `You chose addition. The result of ${num1} plus ${num2} is ${result}.`
    );
  } else if (operation === "subtract") {
    result = num1 - num2;
    console.log(
      `You chose subtraction. The result of ${num1} minus ${num2} is ${result}.`
    );
  } else {
    console.log("I don't recognize that operation.");
  }
}

calculate("mutliply", 10, 20);
calculate("divide", 20, 2);
calculate("add", 55, 11);
calculate("subtract", 50, 40);
calculate("whatevs", 1, 2);
