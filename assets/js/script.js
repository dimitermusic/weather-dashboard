// Confirm js file is properly linked
console.log("js linked");

// Store user input into a variable
var userSearch = document.querySelector(".userInput").value;

// Confirm that dom is selecting correct element
console.log(userSearch);

function getApi() {
  // fetch request gets a list of all the repos for the node.js organization
  var requestUrl = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={605deb5c1cc4ba7a3d01c08035503f22}";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
    });
}

getApi();