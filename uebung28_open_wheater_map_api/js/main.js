/*
Project: uebung28_open_wheater_map_api
Author:  nottj
Date: 28.05.2024
*/

'use strict';

const appName = 'uebung28 Open Weather Map API';
document.getElementById('myTitle').innerText = appName;
document.getElementById('myHeading').innerText = appName;

let output = document.getElementById('output');
let weatherImg = document.getElementById('weatherImg');
let input = document.getElementById('input');
let inputBtn = document.getElementById('inputBtn');
let output2 = document.getElementById('output2');
let weatherImg2 = document.getElementById('weatherImg2');

//Villach ID: 7871492
//Glanegg ID: 7872811


export const APP_ID = 'fee67e2517d65b1c6cd9ee19b06e8e2d';

let baseurl = 'https://api.openweathermap.org/data/2.5/';
let cityID = 7871492; // Villach
//let typeForecast = 'forecast';
let typeWeather = 'weather';
let fetchURL = baseurl + typeWeather + '?' + 'appid=' + APP_ID +
'&units=metric' + '&id=' + cityID;
console.log(fetchURL);
// fetch - API
fetch(fetchURL)
  .then(myResponse => myResponse.json()) // parses JSON response into native JavaScript objects
  .then(weatherObject => { // ASYNCHRON - hier rein gehts wenn fetch fertig ist
    console.log(weatherObject); // representation of weather object as JSON
    console.log(weatherObject => weatherObject.text()); // converts weather object to a text
    console.log(Object.keys(weatherObject)); // names of all properties on first stage
    console.log(Object.keys(weatherObject.coord)); // Example: names of all coordiantes ob wheater object
    console.log(weatherObject.weather[0]); // weather is not an object, but it is an array of objects inside the weatherObject
    console.log(Object.keys(weatherObject.weather[0])); // first entry of weather array is an
    //Output in the GUI: location (here Villach) and temperature info.
    output.innerHTML += `Aktuelle Temperatur in ${weatherObject.name}:
${weatherObject.main.temp} Grad Celsius. <br>`;
    output.innerHTML += `Aktuelle Luftfeuchtigkeit in ${weatherObject.name}: ${weatherObject.main.humidity}%. <br>`;
    output.innerHTML += `Aktueller Luftdruck in ${weatherObject.name}: ${weatherObject.main.pressure} hPa. <br>`;
    output.innerHTML += `Aktuelle Windgeschwindigkeit in ${weatherObject.name}: ${weatherObject.wind.speed} m/s. <br>`;
    console.log(weatherObject.weather[0].icon);
    weatherImg.src = `http://openweathermap.org/img/wn/${weatherObject.weather[0].icon}@2x.png`;
  })
  .catch(error => { // catch any errors
    console.log(error);
    output.innerHTML += error;
  });
console.log('Diese Meldung kommt BEVOR die Wetterdaten aus dem Internet geladen werden'); // fetch is triggered. The rest of the code lines is executed immediately (before fetch gets results from the server).


inputBtn.onclick = () => {
  let fetchURL2 = baseurl + typeWeather + '?' + 'appid=' + APP_ID +
  '&units=metric' + '&id=' + input.value;
  
  fetch(fetchURL2).then(myResponse => myResponse.json()) // parses JSON response into native JavaScript objects
    .then(weatherObject => { // ASYNCHRON - hier rein gehts wenn fetch fertig ist
      console.log(weatherObject); // representation of weather object as JSON
      console.log(weatherObject => weatherObject.text()); // converts weather object to a text
      console.log(Object.keys(weatherObject)); // names of all properties on first stage
      console.log(Object.keys(weatherObject.coord)); // Example: names of all coordiantes ob wheater object
      console.log(weatherObject.weather[0]); // weather is not an object, but it is an array of objects inside the weatherObject
      console.log(Object.keys(weatherObject.weather[0])); // first entry of weather array is an
      //Output in the GUI: location (here Villach) and temperature info.
      output2.innerHTML += `Aktuelle Temperatur in ${weatherObject.name}:
  ${weatherObject.main.temp} Grad Celsius. <br>`;
      output2.innerHTML += `Aktuelle Luftfeuchtigkeit in ${weatherObject.name}: ${weatherObject.main.humidity}%. <br>`;
      output2.innerHTML += `Aktueller Luftdruck in ${weatherObject.name}: ${weatherObject.main.pressure} hPa. <br>`;
      output2.innerHTML += `Aktuelle Windgeschwindigkeit in ${weatherObject.name}: ${weatherObject.wind.speed} m/s. <br>`;
      console.log(weatherObject.weather[0].icon);
      weatherImg2.src = `http://openweathermap.org/img/wn/${weatherObject.weather[0].icon}@2x.png`;
    })
    .catch(error => { // catch any errors
      console.log(error);
      output2.innerHTML += error;
    });
};

