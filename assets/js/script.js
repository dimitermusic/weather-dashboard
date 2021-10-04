// Confirm js file is properly linked
console.log("js linked");
var storeUserInput = document.querySelector(".user-search").value;
var userHistory = []
var searchBtn = document.querySelector(".btn");
var displayHistory = document.querySelector(".search-history")
// var newApi = "api.openweathermap.org/data/2.5/weather?q=" + storeUserInput + "&appid=605deb5c1cc4ba7a3d01c08035503f22";

function handlingBtn() {
    var newSearch = document.querySelector(".user-search").value;
    userHistory.push(newSearch)
    localStorage.setItem("user-history", userHistory)
    console.log(userHistory);
    // Add custom url based on user input.
    // Create conditional statement to check that city is valid by checking that the url works, if not alert "Please choose a valid city!"
    displayUserHistory();
}

function displayUserHistory() {
    displayHistory.innerHTML = ""
    for (let i = 0; i < userHistory.length; i++) {
        var createSearchHistory = document.createElement("button")
        createSearchHistory.innerHTML = userHistory[i];
        createSearchHistory.setAttribute("class", "btn btn-secondary col-12 m-2");
        displayHistory.append(createSearchHistory);
    }
}

searchBtn.addEventListener("click", handlingBtn);

// function parseApi() {
//     fetch("api.openweathermap.org/data/2.5/weather?q=seattle&appid=605deb5c1cc4ba7a3d01c08035503f22")
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//         });
// }

// parseApi();