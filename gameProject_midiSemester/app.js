let computerNumber = computerRandomNumber();
let numberAttempts = 0;

function computerRandomNumber() {
  let secretNumber = Math.floor(Math.random() * 100) + 1;
  console.log("----secretNumber " + secretNumber);
  return secretNumber;
}

function getUserNumber() {
  let userNumber = Number(document.getElementById("userNumber").value);
  if (userNumber > 100 || userNumber < 1) {
    alert("your number should be between 1 and 100");
    return null;
  } else {
    return userNumber;
  }
}

function compareNumbers(computerNumber, userNumber) {
  if (computerNumber === userNumber) {
    let tipElement = document.getElementById("tip");
    tipElement.textContent = `🏆 YOU WIN! ---- play again?`;

    let numberToGuess = document.getElementById("numberToGuess");
    numberToGuess.textContent = computerNumber;

    let playAgainElement = document.getElementById("playNewRoundButton");
    playAgainElement.setAttribute("style", "display: block");
  } else {
    getTip(computerNumber, userNumber);
  }
}

function getTip(computerNumber, userNumber) {
  let tip;
  if (userNumber > computerNumber) {
    tip = "too high";
  } else {
    tip = "too low";
  }
  let tipElement = document.getElementById("tip");
  tipElement.textContent = "Tip: " + tip;
}

function showAttempts(numberOfAttempts, userNumber) {
  let attemptsElement = document.getElementById("attempts");
  let attemptsListElement = document.createElement("div");
  attemptsListElement.textContent =
    "Try " + numberOfAttempts + ": " + userNumber;
  attemptsElement.appendChild(attemptsListElement);
}

function resetRound() {
  let numberToGuess = document.getElementById("numberToGuess");
  numberToGuess.textContent = "❓";

  document.getElementById("userNumber").value = "";

  let tipElement = document.getElementById("tip");
  tipElement.textContent = "";

  let attemptsElement = document.getElementById("attempts");
  attemptsElement.textContent = "";

  computerNumber = computerRandomNumber();
  numberAttempts = 0;
}

function play() {
  let userNumber = getUserNumber();
  if (userNumber != null) {
    numberAttempts = numberAttempts + 1;
    compareNumbers(computerNumber, userNumber);
    showAttempts(numberAttempts, userNumber);
  }
  document.getElementById("userNumber").value = "";
}
