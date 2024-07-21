document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const guessBox = document.querySelector("#guess-box");
    const attemptsDisplay = document.querySelector("#attempts");
    let attemptsLeft = 9;
    let resetGameCounter = 0;
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let previousGuesses = document.querySelector("#previous-guesses");
    let guessArray=[];
    const comments = [
        "Let's get started! You have 10 attempts.",
        "Keep going! 9 attempts left.",
        "You're doing great! 8 attempts left.",
        "Don't give up! 7 attempts left.",
        "Halfway there! 6 attempts left.",
        "Stay sharp! 5 attempts left.",
        "Almost there! 4 attempts left.",
        "Getting close! 3 attempts left.",
        "Just a couple more tries! 2 attempts left.",
        "Last attempt! Make it count!",
    ];

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const guess = Number(guessBox.value);
        console.log(guess);
        if (isNaN(guess) || guess < 1 || guess > 100) {
            attemptsDisplay.innerHTML =
                "Please enter a number between 1 and 100.<br>Don't worry, this does not count as an attempt!!";
        } else if (guess === randomNumber) {
            attemptsDisplay.innerHTML = "Congratulations! You guessed the right number.<br>Restarting the game...";
            setTimeout(resetGame, 2500);
        } else if (attemptsLeft === 0) {
            attemptsDisplay.innerHTML = `Game over! The correct number was ${randomNumber}.<br>Restarting the game...`;
               setTimeout(resetGame, 2500);
        } else {
            if (resetGameCounter === 1) {
                attemptsLeft--;
                resetGameCounter = 0;
            }
            const hint = guess < randomNumber ? "too low" : "too high";
            guessArray.push(guess)
            console.log(guessArray)
            previousGuesses.innerHTML=`<span>Previous Guess:</span> ${guessArray}`
            previousGuesses.setAttribute("class","")
            attemptsDisplay.innerHTML = `Your guess is ${hint}.<br>${comments[10 - attemptsLeft]}`;
            attemptsLeft--;
        }
    });

    function resetGame() {
        previousGuesses.setAttribute("class","disappear")
        previousGuesses.innerHTML=""
        guessArray=[]
        resetGameCounter = 1;
        attemptsLeft = 10;
        guessBox.value = "";
        attemptsDisplay.innerHTML = `Game restarted successfully!!<br>${comments[0]}`;
        randomNumber = Math.floor(Math.random() * 100) + 1;
    }

    attemptsDisplay.innerHTML = comments[0];
    previousGuesses.setAttribute("class","disappear")
});
