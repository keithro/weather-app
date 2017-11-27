import axios from 'axios';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';

const { updateCurrentWeather } = require('./utils/update-data');

const body = document.querySelector('body');
const unitSelector = document.querySelector('.unit-selector');

let latitude;
let longitude;
// const weather = {};
let units = JSON.parse(localStorage.getItem('units')) || 'us';

function fetchData(lat, long) {
  console.log('Fetching Data...');
  // find a better solution for No 'Access-Control-Allow-Origin' header
  const url = `https://crossorigin.me/https://api.darksky.net/forecast/ae4574e6f3db656bc32a6df7cf73842c/${lat},${long}?units=${units}`;

  // Current Weather AJAX Call
  axios.get(url)
    .then((res) => {
      // ADD WEATHER DATA TO LOCAL STORAGE FOR FALL BACK IF NOT WORKING
      body.classList.toggle('ready');
      updateCurrentWeather(res.data);
    })
    .catch((e) => {
      console.log('Error!!!', e);
    });
}

function setUnits() {
  localStorage.setItem('units', JSON.stringify(units));
  unitSelector.textContent = `${units === 'us' ? 'F' : 'C'}`;
}

function toggleUnits() {
  units = units === 'us' ? 'si' : 'us';
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
