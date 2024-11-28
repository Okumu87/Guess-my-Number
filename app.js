'use strict ';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// functions

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //   When there is no input
  if (!guess) {
    displayMessage('No number⛔️');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    // body changes when winning

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = ' 30rem';

    // High score

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // refactored guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High 📈' : 'Too Low 📉');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost the Game 🥹');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing....');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  Number((document.querySelector('.guess').value = ''));

  //   body reset
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = ' 15rem';
});
