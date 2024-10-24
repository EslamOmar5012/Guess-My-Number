'use strict';

// Create a random number between 1 and 20 as the target number
let target = Math.floor(Math.random() * 20) + 1;
let score = 20; // Initialize score to 20
let flag = 0; // Flag to control the game state

// Event listener for the 'check' button click
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value); // Get the user's guess from the input field

  // Check if the game is still active
  if (flag != -1) {
    // If the input is invalid (not a number between 1 and 20)
    if (!guess || guess < 1 || guess > 20) {
      document.querySelector('.message').textContent = '😒Wrong input'; // Display message for wrong input
      flag = 0; // Reset the flag to 0
    } 
    // If the guess is incorrect
    else if (guess !== target) {
      document.querySelector('.message').textContent =
        guess > target ? '👆high' : '👇low'; // Display hint if the guess is too high or too low
      flag = 1; // Update the flag to indicate the game is still on
    } 
    // If the guess is correct
    else {
      document.querySelector('.message').textContent = 'correct'; // Display message for correct guess
      document.querySelector('body').style.backgroundColor = '#60b347'; // Change background color to green
      document.querySelector('.number').style.width = '30rem'; // Increase the width of the number display
      document.querySelector('.number').textContent = target; // Show the correct target number
      flag = -1; // Update the flag to indicate the game is over
    }
  }

  // If the game is still active and the guess was wrong
  if (flag === 1) {
    score--; // Decrease the score by 1
    document.querySelector('.score').textContent = score; // Update the score display
    // If the score reaches 0, the game is lost
    if (score == 0) {
      document.querySelector('.message').textContent = '👿You lost the game...'; // Display losing message
      document.querySelector('body').style.backgroundColor = '#FF0000'; // Change background color to red
      document.querySelector('.number').style.width = '30rem'; // Increase the width of the number display
      document.querySelector('.number').textContent = target; // Show the correct target number
      flag = -1; // Update the flag to indicate the game is over
    }
  }
});

// Event listener for the 'again' button click to reset the game
document.querySelector('.again').addEventListener('click', () => {
  document.querySelector('body').style.backgroundColor = '#222'; // Reset background color
  document.querySelector('.number').textContent = '?'; // Reset the number display to '?'
  document.querySelector('.number').style.width = '15rem'; // Reset the width of the number display
  document.querySelector('.message').textContent = 'Start guessing...'; // Reset the message

  const highScore = Number(document.querySelector('.highscore').textContent); // Get the current high score
  console.log(score, highScore); // Log the current score and high score for debugging

  // Update the high score if the current score is higher and the game is over
  if (score > highScore && flag === -1) {
    document.querySelector('.highscore').textContent = score; // Update the high score display
  }

  document.querySelector('.guess').value = undefined; // Clear the input field

  // Reset the game variables
  target = Math.floor(Math.random() * 20) + 1; // Generate a new target number
  score = 20; // Reset the score to 20
  flag = 0; // Reset the flag to indicate the game is active

  document.querySelector('.score').textContent = score; // Update the score display
});
