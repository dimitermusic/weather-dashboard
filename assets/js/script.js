var storeUserInput = document.querySelector(".user-search").value;
var userHistory = []
var searchBtn = document.querySelector(".btn");
var displayHistory = document.querySelector(".search-history")
var customApi = ""
var currentWeather = document.querySelector(".current-weather")
var forecast = document.querySelector(".forecast")

function handlingBtn() {
    var newSearch = document.querySelector(".user-search").value;
    userHistory.push(newSearch)
    localStorage.setItem("user-history", userHistory)
    console.log(userHistory);
    displayContent();
}

function displayContent() {
    displayHistory.innerHTML = ""
    for (let i = 0; i < userHistory.length; i++) {
        var createSearchHistory = document.createElement("button")
        createSearchHistory.innerHTML = userHistory[i];
        createSearchHistory.setAttribute("class", "btn btn-secondary col-12 m-2");
        displayHistory.append(createSearchHistory);

        var currentTime = moment().format(" (M/DD/YYYY)");
        var currentCity = document.createElement("h2");
        currentCity.innerHTML = userHistory[i] + currentTime;
        currentWeather.append(currentCity);

        var newApi = "https://api.openweathermap.org/data/2.5/weather?q=" + userHistory[i] + "&appid=605deb5c1cc4ba7a3d01c08035503f22";
        console.log(newApi);
        customApi = newApi

        fetch(customApi)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                var currentTemp = data.main.temp;
                var tempEl = document.createElement("p");
                tempEl.innerHTML = "Temp: " + currentTemp
                currentWeather.append(tempEl);
                var currentWind = data.wind.speed;
                var windEl = document.createElement("p");
                windEl.innerHTML = "Wind: " + currentWind
                currentWeather.append(windEl);
                var currentHum = data.main.humidity;
                var humEl = document.createElement("p");
                humEl.innerHTML = "Humidity: " + currentHum
                currentWeather.append(humEl);
                var currentVis = data.main.humidity;
                var visEl = document.createElement("p");
                visEl.innerHTML = "Visibility: " + currentVis
                currentWeather.append(visEl);
            });

    }
}

searchBtn.addEventListener("click", handlingBtn);