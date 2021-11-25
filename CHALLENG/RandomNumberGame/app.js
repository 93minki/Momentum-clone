const maxNumber = document.querySelector("#maxNumber");
const guessForm = document.querySelector("#guess-form");
const guessNumber = document.querySelector("#guess-number");
const playResult = document.querySelector("#play-result");
const resultDisplay = document.querySelector("#result-display");

function handlePlayButton(event) {
  event.preventDefault();
  console.log("maxNumber", maxNumber.value);
  console.log("guessNumber", guessNumber.value);
  makeRandomNumber(maxNumber.min, maxNumber.value);
}

function makeRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max) + 1;
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  printResult(randomNumber, Number(guessNumber.value));
}

guessForm.addEventListener("submit", handlePlayButton);

function printResult(random, chose) {
  let result;
  if (random === chose) {
    result = "You Won!";
  } else {
    result = "You lost!";
  }
  playResult.classList.remove("hidden");
  resultDisplay.classList.remove("hidden");
  playResult.innerHTML = `You Chose: ${chose} the Machine chose: ${random}.`;
  resultDisplay.innerHTML = result;
}
