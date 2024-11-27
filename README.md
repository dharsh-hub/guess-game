
name : DHARSHINI S

reg no: 24900238

program :

num game.html:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Number Guessing Game</title> 
</head>
<body>
    <h1>Number Guessing Game</h1>
    <p>Guess the number between 1 and 100</p>
    <input type="number" id="guessInput" placeholder="Enter your guess" min="1" max="100"><br><br>
    <button id="submitGuess">Submit Guess</button><br><br>
    <button id="restartGame">Restart Game</button><br><br>
    <div id="message"></div>

    <script src="Script.js"></script>
</body>
</html>
```

script.js

```

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

```

output :

![Screenshot 2024-11-27 102300](https://github.com/user-attachments/assets/dda073e0-2898-45b0-b546-a3cc2723a4c7)
