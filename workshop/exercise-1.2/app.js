let winner = 'You lose!';
const result = document.querySelector('#result');
const status = document.querySelector('#time');
const timeText = document.querySelector("#time-text");
let timeout = Math.floor((Math.random() * 5) + 1);
let rotation = 0;

status.textContent = timeout;

let countdown = setInterval(() => {
  timeout -= 1
  rotation += 360;
  status.textContent = timeout;

  timeText.style.transform = `rotate(${rotation}deg)`;

  if (timeout == 0) endCountdown()
}, 1000);


function windowClick() {
  winner = 'You won!!';
  result.style.color = 'rgb(81, 227, 81)';
  result.style.animationName = 'celebrate';
  endCountdown();
}

function endCountdown() {
  clearInterval(countdown);
  result.textContent = winner;
  body.removeEventListener('click', windowClick);
}

window.addEventListener('click', windowClick);
