var cityFormEl = $("#cityForm");
var cityNameEl = $("#cityName");
var latitude;
var longitude;
var cityName;
var currentCityEl = $("#currentCity");
var currentTempEl = $("#currentTemp");
var currentWindEl = $("#currentWind");
var currentHumidityEl = $("#currentHumidity");
var currentUvEl = $("#currentUv");
var currentDate = moment().format("M/DD/YYYY");
var day0El = $("#day0");
var day1El = $("#day1");
var day2El = $("#day2");
var day3El = $("#day3");
var day4El = $("#day4");
var searchHistory = [];
var searchHistoryButtonsEl = $("#searchHistoryButtons");
var clearHistoryBtnEl = $("#clearHistoryBtn");

// Clear the five day forcast to prevent stacking
function clearFiveDay() {
  for (i = 0; i < 5; i++) {
    var clear = document.getElementById('day' + i);
    while (clear.firstChild) {
      clear.removeChild(clear.firstChild);
    }
  }
}

// Get city from user input and check validity
function getCityName(event) {
  event.preventDefault();
  cityName = cityNameEl.val();
  if (!cityName) {
    alert('Please enter a city');
    return;
  }
  verifyCityNameExists();
}

// Clear search history to prevent stacking, get history from local storage, and display on page
function getHistory() {
  var clear = document.getElementById('searchHistoryButtons');
  while (clear.firstChild) {
    clear.removeChild(clear.firstChild);
  }
  searchHistory = JSON.parse(localStorage.getItem('weatherSearchHistory'));
  if (searchHistory !== null) {
    for (i = 0; i < searchHistory.length; i++) {
      searchHistoryButtonsEl.append(
        `<button type="button" class="hisBtn btn btn-block btn-sm btn-primary">${searchHistory[i]}</button>`
      );
    }
  } else {
    searchHistory = [];
  }
}

// Get info for user input city from API
function getWeatherInfo() {
  fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&appid=d2ee20e2eb15e888df5d53206e353c5d`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var weatherIcon = data.current.weather[0].icon;
      currentCityEl.text(cityName + ' (' + currentDate + ')');
      currentCityEl.append(
        `<img src="http://openweathermap.org/img/wn/${weatherIcon}@2x.png" alt="current weather icon" style="width:30px;height:30px;">`
      );
      currentTempEl.text(data.current.temp);
      currentWindEl.text(data.current.wind_speed);
      currentHumidityEl.text(data.current.humidity);
      var currentUv = data.current.uvi;
      currentUvEl.text(currentUv);
      if (currentUv < 3) {
        currentUvEl.attr('class', 'low rounded');
      } else if (currentUv > 5) {
        currentUvEl.attr('class', 'high rounded');
      } else {
        currentUvEl.attr('class', 'med rounded');
      }
      for (i = 0; i < 5; i++) {
        var nextDay = moment()
          .add(i + 1, 'd')
          .format('M/DD/YYYY');
        var buildFiveDay = $('#day' + i);
        buildFiveDay.append(`<div>${nextDay}</div>`);
        var futureWeatherIcon = data['daily'][i].weather[0]['icon'];
        buildFiveDay.append(
          `<img src="http://openweathermap.org/img/wn/${futureWeatherIcon}@2x.png" alt="weather icon" style="width:30px;height:30px;">`
        );
        buildFiveDay.append(
          '<div>Temp: ' + data['daily'][i].temp.day + '&deg;F</div>'
        );
        buildFiveDay.append(
          '<div>Wind: ' + data['daily'][i].wind_speed + '</div>'
        );
        buildFiveDay.append(
          '<div>Humidity: ' + data['daily'][i].humidity + '</div>'
        );
      }
    });
}

// Add city to local storage if doesn't exist
function prepareSite() {
  cityName = cityName.toUpperCase();
  if (searchHistory.indexOf(cityName) == -1) {
    searchHistory.push(cityName);
    localStorage.setItem('weatherSearchHistory', JSON.stringify(searchHistory));
  }
  clearFiveDay();
  getHistory();
}

// Veify valid city from user input and fetch latitude and longitude to use for UV index
function verifyCityNameExists() {
  var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=d2ee20e2eb15e888df5d53206e353c5d`;

  fetch(url)
    .then(function (response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then(function (data) {
      latitude = data.coord.lat;
      longitude = data.coord.lon;
      prepareSite();
      getWeatherInfo();
    })
    .catch(function (error) {
      alert('Can\'t find city, please try again');
    });
}

// Listen for submit on city search form
cityFormEl.on('submit', getCityName);

// Listen for clear search history and remove history from local storage
clearHistoryBtnEl.on('click', function () {
  localStorage.removeItem('weatherSearchHistory');
  getHistory();
});

// Listen for click on dynamically created history button
searchHistoryButtonsEl.on('click', '.hisBtn', function () {
  cityName = $(this).html();
  // rePosition();
  clearFiveDay();
  verifyCityNameExists();
});

//gets the history on page load

getHistory();
