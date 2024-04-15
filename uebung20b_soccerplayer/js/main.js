/*
Project: uebung20b_soccer_player
Author:  nottj
Date: 10.04.2024
*/

'use strict';

const appName = 'Übung20b Soccer Player';
document.getElementById('myTitle').innerText = appName;
document.getElementById('myHeading').innerText = appName;

class SoccerPlayer{

  constructor(playerNumber, position, firstName,lastName, age, weight){
    this.playerNumber = playerNumber;
    this.position = position;
    this. age = age;
    this.weight = weight;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

let p1 = new SoccerPlayer(5, 'Sturm', 'Hanno', 'Morgenstern', 16, 65);
let p2 = new SoccerPlayer(14, 'Verteidigung', 'Julian', 'Mikosch', 16, 60); 
let p3 = new SoccerPlayer(75, 'Verteidigung', 'Herbert', 'Strohmaier', 66, 85); 
let p4 = new SoccerPlayer(80, 'Mittelfeld', 'Hans', 'Harald', 30, 120); 
let p5 = new SoccerPlayer(1, 'Tor', 'Manuel', 'Neuer', 38, 90);

let playerArray = [p1,p2,p3,p4,p5];

//sort

function sortPlayersByName(p1, p2){
  return p1.firstName.localCompare(p2.firstName);
}
playerArray.sort(sortPlayersByName);

playerArray.sort(function(p1,p2){
  return p1.firstName.localCompare(p2.firstName);
});

playerArray.sort((p1,p2) => p1.firstName.localCompare(p2.firstName));

function sortPlayerByAge(array){
  return array.sort((a, b) => b.age - a.age);
}
sortPlayerByAge(playerArray);

playerArray.sort(function(p1,p2){
  p1.age-p2.age;
});

playerArray.sort((p1, p2) => p1.age - p2.age);

//filter

let filterByRole = playerArray.filter(p => p.position == "Stürmer");
let filterByAge = playerArray.filter(p => p.age <= 28);
let filterByPosAndWeight = playerArray.filter(p => p.weight <= 70 && p.position != "Mittelfeld");

//map

let defenders = playerArray.map(p => p.position == "Verteidiger");
let players = playerArray.map(p => p.firstName).filter(p => p.age >= 21 && p.playerNumber <= 45 & p.playerNumber >= 10);

//reduce


function getAverageAge(sum, player){
  return sum + player.age;
}
playerArray.reduce(getAverageAge)/playerArray.length;

let averageAge = playerArray.reduce(function(sum, player){
  return sum+player.age;
})/playerArray.length;

let avrgAge = playerArray.reduce((sum, player) => sum + player.age)/playerArray.length;