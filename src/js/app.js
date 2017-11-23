import axios from 'axios';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';

const { getDate } = require('./utils/dates');
const { createIcon, windIcon } = require('./utils/icons');
// const getDate = require('./utils/dates'); // if above is not working

const body = document.querySelector('body');
const unitSelector = document.querySelector('.unit-selector');
const summary = document.querySelector('.summary');
const currentTemp = document.querySelector('.current-temp');
const rain = document.querySelector('.rain > span');
const wind = document.querySelector('.wind > span');
let latitude;
let longitude;
// const weather = {};
let units = JSON.parse(localStorage.getItem('units')) || 'imperial';

function updateData(data) {
  currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg; ${createIcon(data.weather[0])}</i>`;
  summary.textContent = `${data.weather[0].main} in ${data.name}`;
  rain.textContent = 0; // not working `${Math.round(data.rain.3h) || 0}`
  wind.innerHTML = `${Math.round(data.wind.speed)} <i class="wi wi-wind from-${windIcon(data.wind.deg)}-deg"></i>`;
}

function fetchData(lat, long) {
  console.log('Fetching Data...');
  const url = `https://api.openweathermap.org/data/2.5/weather?units=${units}&lat=${lat}&lon=${long}&APPID=000e52245e9cbf2a3bd9ae75ef64c86d`;

  axios.get(url)
    .then((res) => {
      console.log('Data!!!', res.data);
      updateData(res.data);
      // add ready or active class - move outside of function to create util
      body.classList.toggle('ready');
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
    // { latitude, longitude } = data.coords;
    latitude = data.coords.latitude;
    longitude = data.coords.longitude;
    console.log(latitude, longitude);

    fetchData(latitude, longitude);
  }, (e) => {
    alert(e, 'We need your location to fetch your weather');
  });
};

unitSelector.addEventListener('click', toggleUnits);
setUnits();
runApp();

// // Simulate AJAX call to test styling, animation
// setTimeout(() => {
//   body.classList.toggle('ready');
// }, 1000);
