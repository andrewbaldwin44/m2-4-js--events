let result = 'You lose!';

window.onclick = function(e) {
  result = 'You won!!';
}

setTimeout(() => {
  alert(result);
}, 1000);
