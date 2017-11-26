import axios from 'axios';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';

const { updateCurrentWeather } = require('./utils/update-data');

const body = document.querySelector('body');
const unitSelector = document.querySelector('.unit-selector');

let latitude;
let longitude;
// const weather = {};
let units = JSON.parse(localStorage.getItem('units')) || 'imperial';

function fetchData(lat, long) {
  console.log('Fetching Data...');
  const url = `https://api.openweathermap.org/data/2.5/weather?units=${units}&lat=${lat}&lon=${long}&APPID=000e52245e9cbf2a3bd9ae75ef64c86d`;
  // const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?units=${units}&lat=${lat}&lon=${long}&APPID=000e52245e9cbf2a3bd9ae75ef64c86d`;

  axios.get(url)
    .then((res) => {
      console.log('Data!!!', res.data);
      body.classList.toggle('ready');
      updateCurrentWeather(res.data);
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
runApp();

// Simulate AJAX call to test styling, animation
// setTimeout(() => {
//   body.classList.toggle('ready');
// }, 1000);
