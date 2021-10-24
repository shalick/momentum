// import "./css/style.css";

// import { calculate } from "./js/calc.js";

function showTime() {
  const date = new Date();
  const time = document.querySelector(".time");
  const currentTime = date.toLocaleTimeString();
  time.textContent = currentTime;
  showDate();
  setTimeout(showTime, 1000);
}
showTime();

function showDate() {
  const date = new Date();
  const dateSelector = document.querySelector(".date");
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  const currentDate = date.toLocaleDateString("en-Br", options);
  dateSelector.textContent = currentDate;
}
