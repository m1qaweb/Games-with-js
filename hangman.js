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
