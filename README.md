# Weather Dashboard

## User Story and steps to solution:

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

<!-- GIVEN a weather dashboard with form inputs -->
TODO:
* Create a body with the 'row' and 'wrap' bootsrap class. DONE.
* Create a nav bar with a centered `<h1>` element using bootsrap. DONE.
* Create an `<aside>` container that is 100% the vh of the body and 3/12 columns wide on lg screens and 12/12 for smaller screens, contains a 'Search for City' `h2` elemnt, an input element, a `<button>` element that reads 'Search' and a `<hr>` element. DONE.
* Create a `<div>` element that will contain the dynamically created content from the weather API that is 100% vh and 9/12 columns wide on lg screens and 12/12 for smaller screens. DONE.
<!-- WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history -->
TODO:
* Store the user input from search bar into a variable in js. DONE.
* Use the fetch method to parse information from the weather API. DONE.
* In the `<div>` tag for the main content, add a 'column' class and two divs stacked on top of each other. Give the top div a class with a border. DONE.
* Use localStorage and the get/setItems method to store the searches in local storage (Week 2, Unit 4, Activity 25). DONE.
* Display below the search area using a variable that stores an array of the local storage history, the push method to add new searches into an array to avoid clearing other searches, and html dom to put on page as `<button>` tags. DONE.
<!-- WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index -->
TODO:
* Use html dom to create and append an `<h2>` element that shows the city + the current date using moment js in the format of "(M/DD/YYYY)"
* Use html dom to also list 4 `<p>` elements for Temp, Wind, Humidity, UV Index
<!-- WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe -->
TODO: Use a conditional statement to check if the API for current city is showing as favorable, moderate, or severe and html dom to change the background color to green, yellow, or red accordingly.
* Add a `<span>` tag around the UV Index result as to color only the result.
<!-- WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity -->
TODO:
* Use html dom to add an `<h3>` element that reads '5-Day Forecast:'
* Use a for loop to iterate through each day from today to 5 days from now for respective city and create the below elements.
* Use html dom to create and append 5 divs with a dark background class and white text color.
* Use html dom to create and append to each div an `<h5>` element and moment js to show the date for each day, an icon element to match the expected weather, then 3 `<p>` elements to display Temp, Wind, and Humidity.
<!-- WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city -->
TODO:
* Use html dom and the setAttribute method to change the `href` of each search history `<button>` to its respective city.

## Resources:

* [OpenWeather One Call API](https://openweathermap.org/api/one-call-api)
* [Full-Stack Blog on how to use API keys](https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys).
* [Moment JS Display](https://momentjs.com/docs/#/displaying/)
* [Example of finished product](./assets/06-server-side-apis-homework-demo.png)


## Links:

* [Repository]()
* [Deployed Website]()
- - -
© 2021 Dimiter Yordanov. All Rights Reserved.
