import 'normalize.css/normalize.css';
import '../styles/styles.scss';

const fahrenheit = true; // use ternary operators for ? temp : (temp - 32) * 5 / 9;


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
  const url = `https://api.darksky.net/forecast/ae4574e6f3db656bc32a6df7cf73842c/${lat},${long}`;

  fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw Error(res.status);
      }
      return res;
    })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      alert('There was an error with your request:', e);
    });
}

navigator.geolocation.getCurrentPosition((data) => {
  const { latitude, longitude } = data.coords;

  fetchData(latitude, longitude);
}, (e) => {
  alert(e, 'We need your location to fetch your weather');
});
