// 1.
// Calculator

const num1 = Number(prompt("Enter the first number:"));
const operation = prompt("Enter the operation (+, -, *, /");
const num2 = Number(prompt("Enter the second number"));

// check if both inputs are valid numbers
if (!isNaN(num1) && !isNaN(num2)) {
  // check if entered operations is one of the valid operations
  if (
    operation !== "+" &&
    operation !== "-" &&
    operation !== "*" &&
    operation !== "/"
  ) {
    alert(`Please enter one of the valid operations: +, -, *, /`);
  }
  // declare variable to store result of the operation
  let result;
  // perform the operation based on the entered operator using switch statement
  switch (operation) {
    // addition
    case "+":
      result = num1 + num2;
      console.log(`result is: ${result}`);
      break;
    // substraction
    case "-":
      result = num1 - num2;
      console.log(`result is: ${result}`);
      break;
    // multiplication
    case "*":
      result = num1 * num2;
      console.log(`result is: ${result}`);
      break;
    // division
    case "/":
      // check if dividing by zero
      if (num2 !== 0) {
        result = num1 / num2;
        console.log(`result is: ${result}`);
      } else {
        console.log("Can not divide by zero");
      }
      break;
  }
} else {
  // alert user if entered values are not valid numbers
  console.log("Please enter valid number");
}
