document.addEventListener("DOMContentLoaded", () => {
    const messageElement = document.getElementById("message");
    const guessInput = document.getElementById("guessInput");
    const submitGuessButton = document.getElementById("submitGuess");
    const restartGameButton = document.getElementById("restartGame");

    let targetNumber = generateRandomNumber();
    let attempts = 0;

    
    function generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }

    
    function resetGame() {
        targetNumber = generateRandomNumber();
        attempts = 0;
        guessInput.value = "";
        messageElement.textContent = "";
    }

    
    submitGuessButton.addEventListener("click", () => {
        const guess = parseInt(guessInput.value, 10);

        if (isNaN(guess) || guess < 1 || guess > 100) {
            messageElement.textContent = "Please enter a valid number between 1 and 100.";
            return;
        }

        attempts++;

        if (guess < targetNumber) {
            messageElement.textContent = "Too low! Try again.";
        } else if (guess > targetNumber) {
            messageElement.textContent = "Too high! Try again.";
        } else {
            messageElement.textContent = `Congratulations! You guessed it in ${attempts} attempts.`;
        }
    });

    
    restartGameButton.addEventListener("click", resetGame);
    resetGame();
});
