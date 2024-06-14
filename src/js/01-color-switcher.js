function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
const bodyRef = document.querySelector('body');
stopButton.disabled = true;
let timerId = null;

startButton.addEventListener('click', () => {
  bodyRef.style.backgroundColor = getRandomHexColor();
  timerId = setInterval(
    () => (bodyRef.style.backgroundColor = getRandomHexColor()),
    1000
  );
  startButton.disabled = true;
  stopButton.disabled = false;
});

stopButton.addEventListener('click', () => {
  clearInterval(timerId);
  startButton.disabled = false;
  stopButton.disabled = true;
});
