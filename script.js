'use strict';
//create rundom number from 1 to 20
let target = Math.floor(Math.random() * 20) + 1;
let score = 20;
let flag = 0;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (flag != -1) {
    if (!guess || guess < 1 || guess > 20) {
      document.querySelector('.message').textContent = '😒Wrong input';
      flag = 0;
    } else if (guess !== target) {
      document.querySelector('.message').textContent =
        guess > target ? '👆high' : '👇low';
      flag = 1;
    } else {
      document.querySelector('.message').textContent = 'correct';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = target;
      flag = -1;
    }
  }

  if (flag === 1) {
    score--;
    document.querySelector('.score').textContent = score;
    if (score == 0) {
      document.querySelector('.message').textContent = '👿You lost the game...';
      document.querySelector('body').style.backgroundColor = '#FF0000';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = target;
      flag = -1;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';

  const highScore = Number(document.querySelector('.highscore').textContent);
  console.log(score, highScore);

  if (score > highScore && flag === -1) {
    document.querySelector('.highscore').textContent = score;
  }

  document.querySelector('.guess').value = undefined;

  target = Math.floor(Math.random() * 20) + 1;
  score = 20;
  flag = 0;

  document.querySelector('.score').textContent = score;
});
