import axios from 'axios';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';

const body = document.querySelector('body');
const unitSelector = document.querySelector('.unit-selector');
const currentTemp = document.querySelector('.current-temp');
const summary = document.querySelector('.summary');
let latitude;
let longitude;
let units = JSON.parse(localStorage.getItem('units')) || 'imperial';

function createIcon(weather) {
  let icon = '<i class="wi wi-owm-';
  if ([781, 804, 901, 905].indexOf(weather.id) < 0) {
    if (weather.icon.includes('n')) {
      icon += 'night-';
    } else if (weather.icon.includes('d')) {
      icon += 'day-';
    } else {
      icon += '';
    }
  }
  icon += `${weather.id}"></i>`;
  return icon;
}

function updateData(data) {
  currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg; ${createIcon(data.weather[0])}</i>`;
  summary.textContent = `${data.weather[0].main} in ${data.name}`;
}

function fetchData(lat, long) {
  console.log('Fetching Data...');
  const url = `https://api.openweathermap.org/data/2.5/weather?units=${units}&lat=${lat}&lon=${long}&APPID=000e52245e9cbf2a3bd9ae75ef64c86d`;

  axios.get(url)
    .then((res) => {
      // get data
      console.log('Data!!!', res.data);
      // store data in local storage

      // upate data in DOM
      updateData(res.data);
      // add ready or active class
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
});

// setTimeout(() => {
//   body.classList.toggle('ready');
// }, 2500);
