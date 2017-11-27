const { createIcon, windIcon } = require('./icons');

const body = document.querySelector('body');
const summary = document.querySelector('.summary');
const currentTemp = document.querySelector('.current-temp');
const highLow = document.querySelector('.high-low');
const rainDisplay = document.querySelector('.rain-display > span');
const windDisplay = document.querySelector('.wind-display > span');
const dateHeadings = document.querySelectorAll('.date-heading');
const dailyForecasts = document.querySelectorAll('.daily-forecast');

const updateCurrentWeather = (data) => {
  console.log('Data!!!', data);

  summary.textContent = `Currently ${data.currently.summary}`; // `${data.weather[0].main} in ${data.name}`;
  currentTemp.innerHTML = `${Math.round(data.currently.temperature)}&deg; <i class="wi wi-forecast-io-${data.currently.icon}"></i>`;
  highLow.textContent = `${Math.round(data.daily.data[0].temperatureHigh)}°/${Math.round(data.daily.data[0].temperatureLow)}°`;
  rainDisplay.textContent = `${Math.round(data.currently.precipProbability * 100)}`;
  windDisplay.innerHTML = `${Math.round(data.currently.windSpeed)} <i class="wi wi-wind from-${windIcon(data.currently.windBearing)}-deg"></i>`;

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

  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const time = new Date();
  const day = time.getDay();
  // const date = time.getDate();
  dateHeadings.forEach((heading, ind) => {
    heading.textContent = `${day + ind + 1 < 7 ? days[day + ind + 1] : days[day + ind - 6]}`;
  });
  
  dailyForecasts.forEach((forecast, ind) => {
    const dailyData = data.daily.data[ind + 1];
    console.log(dailyData);
    forecast.innerHTML = `
      <h3>${Math.round(dailyData.temperatureHigh)}°/${Math.round(dailyData.temperatureLow)}°</h3>
      <h3><i class="wi wi-forecast-io-${dailyData.icon}"></i></h3>
      <h3>${Math.round(dailyData.precipProbability * 100)}%</h3>
    `;
  });
};

module.exports = { updateCurrentWeather };
