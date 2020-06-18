const body = document.querySelector('body');

for (let i = 0; i < 20; i++) {
  let button = document.createElement('button');
  button.textContent = 'Click me';
  button.addEventListener('click', () => button.classList.toggle('greenButton'));


  button.style.left = `${Math.random() * 75}%`;
  button.style.top = `${Math.random() * 85}%`;

  body.appendChild(button);
}
