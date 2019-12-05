var displayName = document.querySelector("#displayname");
var displayTemp = document.querySelector("#temp");
var displayHumid = document.querySelector("#humid");
var displayWind = document.querySelector("#wnd");
var displayUv = document.querySelector("#uv");
var forecastDate = document.querySelectorAll(".card-title");
var forecastTemp = document.querySelectorAll(".tempforecast");
var forecastHumid = document.querySelectorAll(".humidforecast");
var forecastIcon = document.querySelectorAll(".forecastIcon");
var searchInput = document.querySelector("#search-input");
var button = document.querySelector("#add-city");
var historyList = document.querySelector("#city-history")

var cityHistory = [];
var city = "New York";

