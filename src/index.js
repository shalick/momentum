// import "./css/style.css";

// import { calculate } from "./js/calc.js";

document.getElementById("enterText").placeholder = "[Enter your name]";

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
  const bgNum = randomNum;
  img.src = `https://raw.githubusercontent.com/shalick/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
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

const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const weatherDescription = document.querySelector(".weather-description");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const weatherError = document.querySelector(".weather-error");

const city = document.querySelector(".city");

async function getWeather() {
  if (!city.value) city.value = "Minsk";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=7be37864b0ff679ef0583a88d1ce3363&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  if (data.cod >= 400 && data.cod < 600) {
    weatherIcon.className = "";
    temperature.textContent = "";
    weatherDescription.textContent = "";
    wind.textContent = "";
    humidity.textContent = "";
    weatherError.textContent = "Wrong city input";
  } else {
    weatherError.textContent = "";
    weatherIcon.className = "weather-icon owf";
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
  }
}
getWeather();
city.addEventListener("change", getWeather);

const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const changeQuote = document.querySelector(".change-quote");

async function getQuotes() {
  const url = `https://type.fit/api/quotes`;
  const res = await fetch(url);
  const data = await res.json();
  let num = Math.floor(Math.random() * 1000);
  quote.textContent = data[num].text;
  author.textContent = data[num].author;
}
getQuotes();
changeQuote.addEventListener("click", getQuotes);

function setLocalStorage() {
  const name = document.querySelector(".name");
  const city = document.querySelector(".city");
  localStorage.setItem("name", name.value);
  localStorage.setItem("city", city.value);
}
window.addEventListener("beforeunload", setLocalStorage);

function getLocalStorage() {
  const name = document.querySelector(".name");
  const city = document.querySelector(".city");
  if (localStorage.getItem("name")) {
    name.value = localStorage.getItem("name");
  }
  if (localStorage.getItem("city")) {
    city.value = localStorage.getItem("city");
  }
}
window.addEventListener("load", getLocalStorage);
