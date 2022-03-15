const numberInput = document.querySelector("div input");
const guessForm = document.querySelector("#guessNumber");
const guessNumber = document.querySelector("#guessNumber input");
const randomNumber = document.querySelector("#random");
const randomNumberText = document.querySelector("#random span");
const result = document.querySelector("#result");
const resultText = document.querySelector("#result b");
let scopeNumber;

const HIDDEN_CLASSNAME = "hidden";
function inputScopeNumber() {
  scopeNumber = numberInput.value;
}

function guessTheNumber(event) {
  event.preventDefault();
  if (scopeNumber === undefined || scopeNumber === "") {
    alert("범위값을 정해주세요 !");
  } else {
    const number = guessNumber.value;
    const rand = Math.floor(Math.random() * scopeNumber);
    randomNumber.classList.remove(HIDDEN_CLASSNAME);
    result.classList.remove(HIDDEN_CLASSNAME);
    randomNumberText.innerText = `You choose: ${number}, the machine chose: ${rand}.`;
    if (number == rand) {
      resultText.innerText = "You win!";
    } else {
      resultText.innerText = "You lost!";
    }
  }
}
numberInput.addEventListener("keyup", inputScopeNumber);
guessForm.addEventListener("submit", guessTheNumber);
