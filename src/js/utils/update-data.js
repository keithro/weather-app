const { createIcon, windIcon } = require('./icons');

const body = document.querySelector('body');
const summary = document.querySelector('.summary');
const currentTemp = document.querySelector('.current-temp');
const highLow = document.querySelector('.high-low');
const rainDisplay = document.querySelector('.rain-display > span');
const windDisplay = document.querySelector('.wind-display > span');
const dateHeadings = document.querySelectorAll('.date-heading');
const dailyForecasts = document.querySelectorAll('.daily-forecast');

const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const time = new Date();
const day = time.getDay();
// const date = time.getDate();

const updateWeather = (data) => {
  console.log('Data!!!', data);

  // Current Weather Content
  summary.textContent = `Currently ${data.currently.summary}`; // `${data.weather[0].main} in ${data.name}`;
  currentTemp.innerHTML = `${Math.round(data.currently.temperature)}&deg; <i class="wi wi-forecast-io-${data.currently.icon}"></i>`;
  highLow.innerHTML = `${Math.round(data.daily.data[0].temperatureHigh)}°<span></span>${Math.round(data.daily.data[0].temperatureLow)}°`;
  rainDisplay.textContent = `${Math.round(data.currently.precipProbability * 100)}`;
  windDisplay.innerHTML = `${Math.round(data.currently.windSpeed)} <i class="wi wi-wind from-${windIcon(data.currently.windBearing)}-deg"></i>`;

  // Forecast Content
  dateHeadings.forEach((heading, ind) => {
    heading.textContent = `${day + ind + 1 < 7 ? days[day + ind + 1] : days[day + ind - 6]}`;
  });

  dailyForecasts.forEach((forecast, ind) => {
    const dailyData = data.daily.data[ind + 1];
    forecast.innerHTML = `
      <div class="daily-temp">
        <p>${Math.round(dailyData.temperatureHigh)}°</p>
        <p>${Math.round(dailyData.temperatureLow)}°</p>
      </div>
      <i class="wi wi-forecast-io-${dailyData.icon}"></i>
      <p><i class="wi wi-raindrops"></i> ${Math.round(dailyData.precipProbability * 100)}%</p>
    `;
  });

  // Background
  // // set background based on data.weather.description
  // console.log('weather id', data.weather[0].id);
  // if (data.weather[0].icon.includes('n')) { // this is alrady the default bg
  //   body.classList.add('night');
  // } else if (data.weather[0].id <= 600 && data.weather[0].id < 700) {
  //   body.classList.add('snow');
  // } else if (data.weather[0].id <= 200 && data.weather[0].id < 800) {
  //   body.classList.add('gray');
  // } else {
  //   body.classList.add('day');
  // }

  // setTimeout(() => {             // Do I need this for background transition?

  // }, 100);
};

module.exports = { updateWeather };
