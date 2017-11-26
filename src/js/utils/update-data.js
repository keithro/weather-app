const { createIcon, windIcon } = require('./icons');

const body = document.querySelector('body');
const summary = document.querySelector('.summary');
const currentTemp = document.querySelector('.current-temp');
const rainDisplay = document.querySelector('.rain-display > span');
const windDisplay = document.querySelector('.wind-display > span');

const updateCurrentWeather = (data) => {
  currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg; ${createIcon(data.weather[0])}</i>`;
  summary.textContent = `${data.weather[0].main} in ${data.name}`;
  rainDisplay.textContent = `${data.rain ? (Math.round(data.rain['3h'] * 10) / 10) : '0.0'}`;
  windDisplay.innerHTML = `${Math.round(data.wind.speed)} <i class="wi wi-wind from-${windIcon(data.wind.deg)}-deg"></i>`;

  // set background based on data.weather.description
  console.log(data.weather[0].id);

  if (data.weather[0].icon.includes('n')) { // this is alrady the default bg
    body.classList.add('night');
  } else if (data.weather[0].id <= 600 && data.weather[0].id < 700) {
    body.classList.add('snow');
  } else if (data.weather[0].id <= 200 && data.weather[0].id < 800) {
    body.classList.add('gray');
  } else {
    body.classList.add('day');
  }
};

module.exports = { updateCurrentWeather };
