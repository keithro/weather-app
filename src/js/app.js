import axios from 'axios';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';

const { getDate } = require('./utils/dates');
const { createIcon, windIcon } = require('./utils/icons');

const body = document.querySelector('body');
const unitSelector = document.querySelector('.unit-selector');
const summary = document.querySelector('.summary');
const currentTemp = document.querySelector('.current-temp');
const rainDisplay = document.querySelector('.rain-display > span');
const windDisplay = document.querySelector('.wind-display > span');

let latitude;
let longitude;
// const weather = {};
let units = JSON.parse(localStorage.getItem('units')) || 'imperial';

function updateData(data) {
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
}

function fetchData(lat, long) {
  console.log('Fetching Data...');
  const url = `https://api.openweathermap.org/data/2.5/weather?units=${units}&lat=${lat}&lon=${long}&APPID=000e52245e9cbf2a3bd9ae75ef64c86d`;
  // const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?units=${units}&lat=${lat}&lon=${long}&APPID=000e52245e9cbf2a3bd9ae75ef64c86d`;

  axios.get(url)
    .then((res) => {
      console.log('Data!!!', res.data);
      // getDate(res.data.dt); // fix function
      updateData(res.data);
      body.classList.toggle('ready');
      // setTimeout(() => {                           // Do I need this?
        
      // }, 100);
    })
    .catch((e) => {
      console.log('Error!!!', e);
    });
}

function setUnits() {
  localStorage.setItem('units', JSON.stringify(units));
  unitSelector.textContent = `${units === 'imperial' ? 'F' : 'C'}`;
}

function toggleUnits() {
  units = units === 'imperial' ? 'metric' : 'imperial';
  setUnits();
  body.classList.toggle('ready');
  fetchData(latitude, longitude);
}

const runApp = () => {
  navigator.geolocation.getCurrentPosition((data) => {
    ({ latitude, longitude } = data.coords);
    console.log(latitude, longitude);
    fetchData(latitude, longitude);
  }, (e) => {
    alert(e, 'We need your location to fetch your weather');
  });
};

unitSelector.addEventListener('click', toggleUnits);
setUnits();
// runApp();

// Simulate AJAX call to test styling, animation
setTimeout(() => {
  body.classList.toggle('ready');
}, 1000);
