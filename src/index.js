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
  if (hours >= 6 && hours < 12) return "morning";
  if (hours >= 12 && hours < 18) return "day";
  if (hours >= 18 && hours < 24) return "evening";
  if (hours >= 0 && hours < 6) return "night";
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

let randomNum;

function getRandomNum() {
  randomNum = String(Math.floor(Math.random() * 19 + 1));
}
getRandomNum();

function setBg() {
  const img = new Image();
  const body = document.querySelector("body");
  const timeOfDay = getTimeOfDay();
  if (randomNum < 10) {
    randomNum = `0${randomNum}`;
    // randomNum.padStart(2, "0")
  }
  console.log(randomNum);
  const bgNum = randomNum;
  img.src = `https://raw.githubusercontent.com/shalick/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
  console.log(img.src);
  img.onload = () => {
    body.style.backgroundImage = `url('https://raw.githubusercontent.com/shalick/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`;
  };
}
setBg();

function getSlideNext() {
  randomNum < 20 ? randomNum++ : (randomNum = 1);
  setBg();
}
const slideNext = document.querySelector(".slide-next");
slideNext.addEventListener("click", getSlideNext);

function getSlidePrev() {
  randomNum > 1 ? randomNum-- : (randomNum = 20);
  setBg();
}
const slidePrev = document.querySelector(".slide-prev");
slidePrev.addEventListener("click", getSlidePrev);
