const body = document.querySelector('body');
const startButton = document.querySelector('#startButton');
const timeText = document.querySelector("#time-text");
const result = document.querySelector('#result');

let gameResult = 'You lose!';
let timeout = 10;

timeText.textContent = timeout;

function startGame() {
  placeButtons();
  startCountdown();
}

function placeButtons() {
  for (let i = 0; i < 20; i++) {
    let button = document.createElement('button');
    button.textContent = 'Click me';
    button.classList.add('gameButtons');
    button.addEventListener('click', colorToggle);


    button.style.left = `${Math.random() * 75}%`;
    button.style.top = `${Math.random() * 85}%`;

    body.appendChild(button);
  }
}

function startCountdown() {
  timeText.classList.add('growShrink');

  let countdown =
    setInterval(() => {
      timeout -= 1
      timeText.textContent = timeout;

      if (isAllButtonsClicked()) {
        gameResult = 'You win!';
        endCountdown(countdown);
      };

      if (timeout == 0) {
        endCountdown(countdown)
      }
    }, 1000);
}

function endCountdown(countdown) {
  clearInterval(countdown);
  result.textContent = gameResult;
}

function isAllButtonsClicked() {
  let gameButtons = document.querySelectorAll('.gameButtons');
  return [...gameButtons].every(button => button.classList.contains('greenButton'));
}

function colorToggle(e) {
  e.target.classList.toggle('greenButton')
}

startButton.addEventListener('click', () => {
  startButton.remove();
  startGame();
})
