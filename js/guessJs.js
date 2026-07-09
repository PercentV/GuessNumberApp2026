let guessHidden = document.getElementById("guess-hidden");
let guessNumber = document.getElementById("guess-number");
let inputGuess = document.getElementById("input-guess");
let textMessage = document.getElementById("text-message");
const btnGuess = document.getElementById("btn-guess");
const btnAgain = document.getElementById("btn-again");
let attempt = document.getElementById("attempt");

let inputValue = 0;
let remainingAttempt = 5;

let guessNumberValue = parseInt(guessNumber.innerText);

let RandNumber = function () {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    guessNumber.innerText = randomNumber;
    guessNumberValue = randomNumber;
}

RandNumber();

let CheckRangeInputFromOneToTen = function () {
    inputValue = parseInt(inputGuess.value);

    if (inputValue > 10 || inputValue < 1) {
        inputGuess.value = "0";
        textMessage.innerText = "Must be at least 1 and not more than 10";
    }
}

let GuessMatching = function () {
    inputValue = parseInt(inputGuess.value);
    if (inputGuess.value == "")
	    TextMessage("Input value");
    else if (inputGuess.value == guessNumber.innerText) {
        guessHidden.classList.add("textHidden");
        guessNumber.classList.add("textShow");
        inputGuess.disabled = true;
        textMessage.innerHTML = "Perfect <i class='fa-regular fa-face-grin-hearts'></i>";
        textMessage.classList.remove("text-normal");
        textMessage.classList.add("text-perfect");
    }
    else {
        remainingAttempt--;
        let message = (inputValue > guessNumberValue) ? `Less than ${inputGuess.value}` : `Greater than ${inputGuess.value}`;
        let attmpt = (remainingAttempt > 0) ? remainingAttempt : 0;

        if (attmpt) {
            Attempts(remainingAttempt)
            TextMessage(message);
        }
        else
        {
            TextMessage("0 attempt. Try again");
            remainingAttempt = 0;
            Attempts(remainingAttempt);
            inputGuess.disabled = true;
        }
    }
    CheckRangeInputFromOneToTen();
}

let Again = function () {
    inputGuess.value = "0";
    textMessage.innerText = "";
    guessHidden.classList.remove("textHidden");
    guessNumber.classList.remove("textShow");
    inputGuess.disabled = false;
    textMessage.classList.add("text-normal");
    textMessage.classList.remove("text-perfect");
    attempt.innerText = remainingAttempt = 5;
    RandNumber();
}

let Attempts = function(attmpt) {
    attempt.innerText = attmpt;
}

let TextMessage = function (message) {
    textMessage.innerText = message;
}

btnAgain.addEventListener("click", Again);
btnGuess.addEventListener("click", GuessMatching);
