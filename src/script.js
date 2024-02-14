// script.js
const targetNumber = generateRandomNumber();

function generateRandomNumber() {
    // Generate a random five-digit number (between 10000 and 99999)
    return Math.floor(Math.random() * 90000) + 10000;
}

function checkGuess() {
    const userGuess = document.getElementById("guessInput").value;
    if (userGuess.length !== 5 || isNaN(userGuess)) {
        document.getElementById("result").innerText = "Please enter a valid five-digit number.";
        return;
    }

    const feedback = compareGuess(userGuess);
    document.getElementById("result").innerHTML = feedback;
}

function compareGuess(guess) {
    // Compare the user's guess with the target number
    // Provide detailed feedback on each digit with CSS classes
    const targetDigits = targetNumber.toString().split("");
    const guessDigits = guess.split("");

    let feedback = "";

    for (let i = 0; i < 5; i++) {
        if (guessDigits[i] === targetDigits[i]) {
            feedback += `<span class="correct">${guessDigits[i]}</span> is correct!<br>`;
        } else {
            // Check if the digit is in the wrong position (not already correctly positioned)
            const correctPositionIndex = targetDigits.indexOf(guessDigits[i]);
            if (correctPositionIndex !== -1 && correctPositionIndex !== i) {
                feedback += `<span class="wrong-position">${guessDigits[i]}</span> is correct but in the wrong position.<br>`;
            } else {
                feedback += `<span class="incorrect">${guessDigits[i]}</span> is incorrect.<br>`;
            }
        }
    }

    if (targetNumber != guess) {
        feedback += "Keep trying!";
    } else {
        feedback += "Congratulations! You guessed the correct number!";
    }

    return feedback;
}
