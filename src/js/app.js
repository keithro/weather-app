import axios from 'axios';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';

const { updateWeather } = require('./utils/update-data');
// const { seedData } = require('./utils/seed-data');

const body = document.querySelector('body');
const unitSelector = document.querySelector('.unit-selector');
let units = JSON.parse(localStorage.getItem('units')) || 'us';
let latitude;
let longitude;

const fetchData = (lat, long) => {
  console.log('Fetching Data...');

  // Find a better solution for No 'Access-Control-Allow-Origin' header
  const url = `https://crossorigin.me/https://api.darksky.net/forecast/ae4574e6f3db656bc32a6df7cf73842c/${lat},${long}?units=${units}`;
  // const url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/ae4574e6f3db656bc32a6df7cf73842c/${lat},${long}?units=${units}`;

  axios.get(url)
    .then((res) => {
      updateWeather(res.data);
      // body.classList.toggle('ready');
    })
    .catch((e) => {
      // console.log('Error!!!', e);
      body.classList.toggle('error');
    });
};

const setUnits = () => {
  localStorage.setItem('units', JSON.stringify(units));
  unitSelector.textContent = `${units === 'us' ? 'F' : 'C'}`;
};

const toggleUnits = () => {
  units = units === 'us' ? 'si' : 'us';
  setUnits();
  body.classList.toggle('ready');
  fetchData(latitude, longitude);
};

unitSelector.addEventListener('click', toggleUnits);
setUnits();

navigator.geolocation.getCurrentPosition((data) => {
  ({ latitude, longitude } = data.coords);
  fetchData(latitude, longitude);
}, (err) => {
  alert(err, 'We need your location to fetch your weather');
});

// // Simulate AJAX call for development
// setTimeout(() => {
//   updateWeather(seedData);
//   body.classList.toggle('ready');
// }, 1000);
