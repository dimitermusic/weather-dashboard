var storeUserInput = document.querySelector(".user-search").value;
var userHistory = []
var searchBtn = document.querySelector(".btn");
var displayHistory = document.querySelector(".search-history")
var customApi = ""

function handlingBtn() {
    var newSearch = document.querySelector(".user-search").value;
    userHistory.push(newSearch)
    localStorage.setItem("user-history", userHistory)
    console.log(userHistory);
    displayUserHistory();
}

function displayUserHistory() {
    displayHistory.innerHTML = ""
    for (let i = 0; i < userHistory.length; i++) {
        var createSearchHistory = document.createElement("button")
        createSearchHistory.innerHTML = userHistory[i];
        createSearchHistory.setAttribute("class", "btn btn-secondary col-12 m-2");
        displayHistory.append(createSearchHistory);

        var newApi = "https://api.openweathermap.org/data/2.5/weather?q=" + userHistory[i] + "&appid=605deb5c1cc4ba7a3d01c08035503f22";
        console.log(newApi);
        customApi = newApi
        parseApi();
    }
}

searchBtn.addEventListener("click", handlingBtn);

function parseApi() {
    fetch(customApi)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        });
        data.
        if (response.status === 200) {
            
        }
}