const body = document.querySelector('body');

for (let i = 0; i < 20; i++) {
  let button = document.createElement('button');
  button.textContent = 'Click me';
  button.addEventListener('click', () => button.classList.toggle('greenButton'));
  body.appendChild(button);
}
