const main = document.querySelector('#main')
let header = document.createElement('h1')
header.textContent = "You clicked the page!"

window.onclick = function(event) {
  main.appendChild(header);
}
