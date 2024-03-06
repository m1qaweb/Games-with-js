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
  if (userGuess === null || isNaN(userGuess)) {
    console.log("გთხოვთ შეიყვანოთ ვალიდური რიცხვი!!!");
    continue;
  }

  // convert user input to number
  userGuess = parseInt(userGuess);

  let feedback = "კიდევ სცადეთ.";
  //check if the user's guess matches target number
  if (!isNaN(userGuess)) {
    if (userGuess === targetNumber) {
      console.log(`გილოცავთ! თქვენ სწორად გამოიცანით რიცხვი: ${targetNumber}`);
      // exit loop after user guessed correctly
      break;
    } else {
      // calculate the difference between user's guess and target number
      const difference = targetNumber - userGuess;

      // provide feedback based on difference between user's guess and the target number
      if (difference > 20) {
        feedback = "ძალიან მაღალია! კიდევ სცადეთ.";
      } else if (difference >= 0) {
        feedback = "მაღალია! კიდევ სცადეთ.";
      } else if (difference > -10) {
        feedback = "დაბალია! კიდევ სცადეთ.";
      } else if (difference >= -20) {
        feedback = "ძალიან დაბალია! კიდევ სცადეთ.";
      }
      console.log(feedback);
      attempts++;
    }
  }
  if (attempts === maxAttempts) {
    console.log(
      `თქვენ ამოგეწურათ მცდელობები ${maxAttempts}. სწორი რიცხვი იყო: ${targetNumber}`
    );
  }
}
