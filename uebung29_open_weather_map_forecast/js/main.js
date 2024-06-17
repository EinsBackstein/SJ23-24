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
let typeForecast = 'forecast';
// let typeWeather = 'weather';
let fetchURL =
  baseurl +
  typeForecast +
  '?' +
  'appid=' +
  APP_ID +
  '&units=metric' +
  '&id=' +
  cityID;

fetch(fetchURL)
  .then((myResponse) => myResponse.json())
  .then((weatherObject) => {
    let forecast = weatherObject.list;
    let currentDay = [];
    let day1 = [];
    let day2 = [];
    let day3 = [];
    let day4 = [];
    let day5 = [];

    let day = new Date();
    let day0 = day.getDate();
    let month = day.getMonth();
    let year = day.getFullYear();

    for(let i = 0; i < 40; i++){
      if(forecast[i].dt_txt.substring(8,10)==day0){
        currentDay.push(forecast[i].main.temp);
      }
      if(forecast[i].dt_txt.substring(8,10)==day0+1){
        day1.push(forecast[i].main.temp);
      }
      if(forecast[i].dt_txt.substring(8,10)==day0+2){
        day2.push(forecast[i].main.temp);
      }
      if(forecast[i].dt_txt.substring(8,10)==day0+3){
        day3.push(forecast[i].main.temp);
      }
      if(forecast[i].dt_txt.substring(8,10)==day0+4){
        day4.push(forecast[i].main.temp);
      }
      if(forecast[i].dt_txt.substring(8,10)==day0+5){
        day5.push(forecast[i].main.temp);
      }
    }

    console.log(`Heute = ${day0}`);
    
    console.log(forecast);
    console.log(getAverage(currentDay));
    console.log(getAverage(day1));
    console.log(getAverage(day2));
    console.log(getAverage(day3));
    console.log(getAverage(day4));
    console.log(getAverage(day5));

    output2.innerHTML = `<table class="tg"><thead>
  <tr>
    <th>Tag</th>
    <th>Durchschnittstemperatur in °C</th>
  </tr></thead>
<tbody>
  <tr>
    <td>${day0}.${month}.${year}</td>
    <td>${getAverage(currentDay)}</td>
  </tr>
  <tr>
    <td>${day0+1}.${month}.${year}</td>
    <td>${getAverage(day1)}</td>
  </tr>
  <tr>
    <td>${day0+2}.${month}.${year}</td>
    <td>${getAverage(day2)}</td>
  </tr>
  <tr>
    <td>${day0+3}.${month}.${year}</td>
    <td>${getAverage(day3)}</td>
  </tr>
  <tr>
    <td>${day0+4}.${month}.${year}</td>
    <td>${getAverage(day4)}</td>
  </tr>
  <tr>
    <td>${day0+5}.${month}.${year}</td>
    <td>${getAverage(day5)}</td>
  </tr>
</tbody>
</table>`;
  })
  .catch((error) => {
    console.log(error);
    output.innerHTML += error;
  });
console.log(
  'Diese Meldung kommt BEVOR die Wetterdaten aus dem Internet geladen werden'
);

function getAverage(array){
  return (array.reduce((sum, val) => sum + val)/array.length).toFixed(1);
}

