import axios from 'axios';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';

// ===============================
// IS THERE A UNITS OPTION IN API?
const fahrenheit = true; // use ternary operators for ? temp : (temp - 32) * 5 / 9;
// ===============================

// app icons - use a default
// clear-day
// clear-night
// rain
// snow
// sleet
// wind
// fog
// cloudy
// partly-cloudy-day
// partly-cloudy-night

function fetchData(lat, long) {
  const url = `https://crossorigin.me/https://api.darksky.net/forecast/ae4574e6f3db656bc32a6df7cf73842c/${lat},${long}`;
  axios.get(url)
    .then((res) => {
      console.log('Data!!!', res);
    })
    .catch((e) => {
      console.log('Error!!!', e);
    });
}

navigator.geolocation.getCurrentPosition((data) => {
  const { latitude, longitude } = data.coords;
  // console.log(latitude, longitude);

  fetchData(latitude, longitude);
}, (e) => {
  alert(e, 'We need your location to fetch your weather');
});
