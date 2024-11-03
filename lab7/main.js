let counter = 0;
const counterDisplay = document.getElementById('counter');

function count() {
  counter++;
  counterDisplay.textContent = counter;
}