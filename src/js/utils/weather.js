
async function fetchData(lat, long) {
  const currentUrl = `https://api.openweathermap.org/data/2.5/weather?units=${units}&lat=${lat}&lon=${long}&APPID=000e52245e9cbf2a3bd9ae75ef64c86d`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?units=${units}&lat=${lat}&lon=${long}&APPID=000e52245e9cbf2a3bd9ae75ef64c86d`;

  const currentPromise = axios.get(currentUrl);
  const forecastPromise = axios.get(forecastUrl);
  console.log(currentPromise);
  console.log(forecastPromise);

  weather.current = await currentPromise;
  weather.forecast = await forecastPromise;
  console.log(weather.current);
  console.log(weather.forecast);
}

// =========================================================

async function getMovieData() {
  var titanicPromise = $.getJSON(`https://omdbapi.com?t=titanic&apikey=thewdb`);
  var shrekPromise = $.getJSON(`https://omdbapi.com?t=shrek&apikey=thewdb`);

  var titanicData = await titanicPromise;
  var shrekData = await shrekPromise;

  console.log(titanicData);
  console.log(shrekData);
}
// getMovieData().then().catch(e) ?

async function getMovieData(first, second) {
  var moviesList = await Promise.all([
    $.getJSON(`https://omdbapi.com?t=${first}&apikey=thewdb`),
    $.getJSON(`https://omdbapi.com?t=${second}&apikey=thewdb`)
  ]);
  console.log(moviesList[0].Year);
  console.log(moviesList[1].Year);
  weather.current =
}

const populateUsers = (done) => {
  User.remove({}).then(() => {
    var userOne = new User(users[0]).save();
    var userTwo = new User(users[1]).save();

    return Promise.all([userOne, userTwo])
  }).then(() => done());
};