// import "./css/style.css";

// import { calculate } from "./js/calc.js";

function showTime() {
  const date = new Date();
  const time = document.querySelector(".time");
  const currentTime = date.toLocaleTimeString();
  time.textContent = currentTime;
  showDate();
  showGreeting();
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

function showGreeting() {
  const greeting = document.querySelector(".greeting");
  const timeOfDay = getTimeOfDay();
  const greetingText = `Good ${timeOfDay}`;
  greeting.textContent = greetingText;
}

function getTimeOfDay() {
  const date = new Date();
  const hours = date.getHours();
  if (hours > 6 && hours < 11) return "morning";
  if (hours > 12 && hours < 18) return "day";
  if (hours > 18 && hours < 24) return "evening";
  if (hours > 0 && hours < 6) return "night";
}

function setLocalStorage() {
  const name = document.querySelector(".name");
  localStorage.setItem("name", name.value);
}
window.addEventListener("beforeunload", setLocalStorage);

function getLocalStorage() {
  const name = document.querySelector(".name");
  if (localStorage.getItem("name")) {
    name.value = localStorage.getItem("name");
  }
}
window.addEventListener("load", getLocalStorage);
