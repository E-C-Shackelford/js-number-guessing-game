var response = document.querySelector(".response");
var showGuess = document.querySelector(".show-guess");
var num = Number(prompt("Guess a number between 1-25. :)"));

function guessNumber(name, num) {
  // This line will produce a number between 1 and 100
  var randomNumber = Math.floor(Math.random() * 26);

  // Use conditional statements to make sure the user guesses a number between 1 and 25
  if (num > 25) {
    response.innerText = "We need a number between 1 and 25.";
    return;
  } else if (num < 1) {
    response.innerText = "We need a number between 1 and 25.";
    return;
  }

  showGuess.innerText = num;
  // provide specific responses depending on the number the user guesses vs. the correct answer
  if (num === randomNumber) {
    response.innerText = `Hey, ${name}, you totally guessed the number! Must be your lucky day.`;
  } else if (num < randomNumber) {
    response.innerText = `Hey, ${name}, your guess was too low. The number was ${randomNumber}.`;
  } else if (num > randomNumber) {
    response.innerText = `Hey, ${name}, your guess was too high. The number was ${randomNumber}.`;
  } else {
    response.innerText = `That's not a number, {name}!`;
  }
}

guessNumber("Elizabeth", num);
