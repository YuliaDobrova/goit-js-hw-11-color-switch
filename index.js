const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const startBtnEl = document.querySelector('button[data-action="start"]');
const stopBtnEl = document.querySelector('button[data-action="stop"]');
let setId;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

startBtnEl.addEventListener("click", onStartBtnClick);
stopBtnEl.addEventListener("click", onStopBtnClick);

function onStartBtnClick() {
  startBtnEl.setAttribute("disabled", true);
  setId = setInterval(() => {
    document.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
}

function onStopBtnClick() {
  clearInterval(setId);
  startBtnEl.removeAttribute("disabled");
}
