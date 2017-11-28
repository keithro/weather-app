import axios from 'axios';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';

const { updateWeather } = require('./utils/update-data');

const body = document.querySelector('body');
const unitSelector = document.querySelector('.unit-selector');
const summary = document.querySelector('.summary');
let units = JSON.parse(localStorage.getItem('units')) || 'us';
let latitude;
let longitude;
let weatherData;

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

const fetchData = (lat, long) => {
  console.log('Fetching Data...');

  // find a better solution for No 'Access-Control-Allow-Origin' header
  const url = `https://crossorigin.me/https://api.darksky.net/forecast/ae4574e6f3db656bc32a6df7cf73842c/${lat},${long}?units=${units}`;
  // const url = `https://cors-anywhere.herokuapp.com/ https://api.darksky.net/forecast/ae4574e6f3db656bc32a6df7cf73842c/${lat},${long}?units=${units}`;

  axios.get(url)
    .then((res) => {

      // // ADD WEATHER DATA TO LOCAL STORAGE FOR FALL BACK IF NOT WORKING
      // localStorage.setItem('weatherData', JSON.stringify(res.data));
      
      updateWeather(res.data);
      body.classList.toggle('ready');
    })
    .catch((e) => {
      console.log('Error!!!', e);
      
      // // use data in local storage in development only
      // weatherData = JSON.parse(localStorage.getItem('weatherData'));
      // updateWeather(weatherData);
      
      body.classList.toggle('error');
    });
};

unitSelector.addEventListener('click', toggleUnits);
setUnits();

navigator.geolocation.getCurrentPosition((data) => {
  ({ latitude, longitude } = data.coords);
  console.log(latitude, longitude);
  fetchData(latitude, longitude);
}, (e) => {
  alert(e, 'We need your location to fetch your weather');
});

// // Simulate AJAX call to test styling, animation
// setTimeout(() => {
//   weatherData = JSON.parse(localStorage.getItem('weatherData'));
//   updateWeather(weatherData);
//   body.classList.toggle('ready');
// }, 1000);
