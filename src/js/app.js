import axios from 'axios';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';

const unitSelector = document.querySelector('.unit-selector');
const currentTemp = document.querySelector('.current-temp');
// const currentWeath = currentTemp.querySelector('.wi');
let latitude;
let longitude;
let units = JSON.parse(localStorage.getItem('units')) || 'us';

// app icons
// use a default and export from map file
const icons = {
  'clear-day': 'day-sunny',
  'clear-night': 'night-clear',
  'rain': 'rain',
  'snow': 'snow',
  'sleet': 'sleet',
  'wind': 'strong-wind',
  'fog': 'fog',
  'cloudy': 'cloudy',
  'partly-cloudy-day': 'day-cloudy',
  'partly-cloudy-night': 'night-alt-cloudy'
}


function updateData(res) {
  currentTemp.innerHTML = `${Math.round(res.data.currently.temperature)}&deg;<i class="wi wi-${icons[res.data.currently.icon]}"></i>`;
}

function fetchData(lat, long) {
  console.log('Fetching Data...');
  // find a better solution for No 'Access-Control-Allow-Origin' header
  const url = `https://crossorigin.me/https://api.darksky.net/forecast/ae4574e6f3db656bc32a6df7cf73842c/${lat},${long}?units=${units}`;
  axios.get(url)
    .then((res) => {
      console.log('Data!!!', res.data);
      updateData(res);
    })
    .catch((e) => {
      console.log('Error!!!', e);
    });
}

function setUnits() { // seperate the toggleUnits and updateUnits functions
  localStorage.setItem('units', JSON.stringify(units));
  unitSelector.textContent = `${units === 'us' ? 'F' : 'C'}`;
}

function toggleUnits() {
  units = units === 'us' ? 'si' : 'us';
  setUnits();
  fetchData(latitude, longitude);
}

unitSelector.addEventListener('click', toggleUnits); // change to toggleUnits

navigator.geolocation.getCurrentPosition((data) => {
  // { latitude, longitude } = data.coords;
  latitude = data.coords.latitude;
  longitude = data.coords.longitude;
  console.log(latitude, longitude);

  setUnits();
  fetchData(latitude, longitude);
}, (e) => {
  alert(e, 'We need your location to fetch your weather');
  // run different location service
});
