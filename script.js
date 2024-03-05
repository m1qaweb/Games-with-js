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

// 2.
// Guess The Number

// Generate random number between 1-100
const targetNumber = Math.floor(Math.random() * 100) + 1;
// define maximum number of attempts
const maxAttempts = 7;
// set number of attempts
let attempts = 0;
console.log("გამოიცანით რიცხვი 1 დან 100-ის ჩათვლით!");

// loop to allow the user to make guess until they run out of attempts or correctly guessed

while (attempts < maxAttempts) {
  let userGuess = prompt("შეიყვანეთ რიცხვი: ");

  // check if input is not a number
  if (isNaN(userGuess)) {
    console.log("გთხოვთ შეიყვანოთ ვალიდური რიცხვი!!!");
    continue;
  }

  // convert user input to number
  userGuess = parseInt(userGuess);

  //check if the user's guess matches target number
  if (userGuess === targetNumber) {
    console.log(`გილოცავთ! თქვენ სწორად გამოიცანით რიცხვი: ${targetNumber}`);
    // exit loop after user guessed correctly
    break;
  } else {
    // calculate the difference between user's guess and target number
    const difference = targetNumber - userGuess;
    let feedback;
    // provide feedback based on difference between user's guess and the target number
    if (difference > 20) {
      feedback = "ძალიან მაღალია! კიდევ სცადეთ.";
    } else if (difference > 0) {
      feedback = "მაღალია! კიდევ სცადეთ.";
    } else if (difference > -10) {
      feedback = "დაბალია! კიდევ სცადეთ.";
    } else if (difference > -20) {
      feedback = "ძალიან დაბალია! კიდევ სცადეთ.";
    }
    console.log(feedback);
    attempts++;
  }
}
// if the user runs out of attempts without guessing correctly, let them know correct number in console
if (attempts === maxAttempts) {
  console.log(
    `თქვენ ამოგეწურათ მცდელობები!!! სწორი რიცხვი იყო: ${targetNumber}`
  );
}

// 3.
// Hangman

// list of words
const wordList = ["metro", "music", "pizza", "chess", "lion"];

//choose random word
const chosenWord = wordList[Math.floor(Math.random() * wordList.length)];

//  initialize hiddenWord with underscores
let hiddenWord = "_".repeat(chosenWord.length);

// set number of attempts
let attempts2 = 6;
console.log("WELCOME TO HANGMAN");

while (attempts2 > 0 && hiddenWord.includes("_")) {
  // display current state
  console.log(`Word: ${hiddenWord} | attempts left: ${attempts2}`);
  const guess = prompt("Enter a letter:").toLowerCase();

  // check if guessed letter is in the word
  if (chosenWord.includes(guess)) {
    console.log("Correct guess");
    hiddenWord = [...hiddenWord]
      .map((char, index) => {
        if (chosenWord[index] === guess) {
          return guess;
        } else {
          return char;
        }
      })
      .join("");
  } else {
    console.log("Incorrect guess. please try again!");
    attempts2--;
  }
}
// game result
if (hiddenWord.includes("_")) {
  console.log(`You are out of attempts. the word was: ${chosenWord}`);
} else {
  console.log(`Well done! you guessed the word: ${chosenWord}`);
}
