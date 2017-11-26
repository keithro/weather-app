const { createIcon, windIcon } = require('./icons');

const body = document.querySelector('body');
const summary = document.querySelector('.summary');
const currentTemp = document.querySelector('.current-temp');
const rainDisplay = document.querySelector('.rain-display > span');
const windDisplay = document.querySelector('.wind-display > span');

const dateHeadings = document.querySelectorAll('.day');
const dailyForecasts = document.querySelectorAll('.daily-forecast');

const updateCurrentWeather = (data) => {
  console.log('Data!!!', data);

  currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg; ${createIcon(data.weather[0])}`;
  summary.textContent = `${data.weather[0].main} in ${data.name}`;
  rainDisplay.textContent = `${data.rain ? (Math.round(data.rain['3h'] * 10) / 10) : '0.0'}`;
  windDisplay.innerHTML = `${Math.round(data.wind.speed)} <i class="wi wi-wind from-${windIcon(data.wind.deg)}-deg"></i>`;

  // set background based on data.weather.description
  console.log('weather id', data.weather[0].id);
  if (data.weather[0].icon.includes('n')) { // this is alrady the default bg
    body.classList.add('night');
  } else if (data.weather[0].id <= 600 && data.weather[0].id < 700) {
    body.classList.add('snow');
  } else if (data.weather[0].id <= 200 && data.weather[0].id < 800) {
    body.classList.add('gray');
  } else {
    body.classList.add('day');
  }

      // setTimeout(() => {             // Do I need this for background transition?

      // }, 100);
};

const updateForecast = (data) => {
  console.log('Forecast Data!!!', data);

  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const time = new Date();
  const day = time.getDay(); // 0-6
  const date = time.getDate();
  console.log({ day, date }); // working?

  dateHeadings.forEach((heading, ind) => {
    heading.textContent = `${day + ind + 1 < 7 ? days[day + ind + 1] : days[day + ind - 6]} ${date + ind + 1}`;
  });

  /* 
  After getting this far in development and having implimented two different APIs only to find out they dont suit my needs I just faked the forecast information to complete the project but will recreate with node so I can use the Darksky API again.
  */
  console.log(dailyForecasts);
  // dailyForecasts.forEach((forecast) => {
  //   forecast.innerHTML = `
  //     <h3>${}/${}</h3>

  //     <h3></h3>
  //   `
  // });
};

module.exports = { updateCurrentWeather, updateForecast };
