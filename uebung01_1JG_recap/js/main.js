/*
Project: uebung01_1JG_recap
Author:  nottj
Date: 19.09.2023
*/

'use strict';

const appName = 'Übung01 1JG Recap';
document.getElementById('myTitle').innerText = appName;
document.getElementById('myHeading').innerText = appName;

//functions

//This function is used to add a number to an array

function addNumber(numArray, num) {
  numArray.push(num);
}

//This function is used to check, if an input is a positive Integer

function isPosNum(num) {
  num = Number(num);
  if (Number.isInteger(num) && num >= 0 && num != '') {
    return true;
  }
  return false;
}

//This function is used to count the itterations of a certain number in an array

function countNum(numArray, numToCount) {
  let counter = 0;
  for (let num of numArray) {
    if (num == numToCount) {
      counter++;
    }
  }
  return counter;
}

//This function is used to output all numbers in an array that are dividable by 2 and/or 5 without any remains

function outputSpecialNumbers(numArray) {
  let specialNumArray = [];
  for (let num of numArray) {
    if (num % 2 == 0 || num % 5 == 0) {
      specialNumArray.push(num);
    }
  }
  return specialNumArray;
}

//This function is used to get the index-positions of a certain number in an array

function getIndexPos(numArray, numToCount) {
  let posArray = [];
  for (let i = 0; i < numArray.length;i++) {
    if(numArray[i] == numToCount){
      posArray.push(i);
    }
  }
  return posArray;
}

//main-code

let numArray = [];

//Here the user has to input a number, which is then checked and put into the array

let input = prompt(
  'Geben Sie bitte eine Zahl ein. Falls Sie die Eingabe abbrechen wollen, geben Sie bitte "q" ein'
);

while (input != 'q') {
  if (isPosNum(input) == true) {
    addNumber(numArray, input);
  } else if (isPosNum(input) == false) {
    alert('Eingabe ist keine ganze, positive Zahl');
  }
  input = prompt(
    'Geben Sie bitte eine weitere Zahl ein. Falls Sie die Eingabe abbrechen wollen, geben Sie bitte "q" ein'
  );
}

//Now the user has to input a second number which is then checked and searched for in the array

let input2 = Number(
  prompt(
    'Bitte geben Sie eine weitere Zahl ein, die dann auf Vorkommniss gezählt wird'
  )
);

while (isPosNum(input2) == false) {
  input2 = Number(prompt('Eingabe nicht ok, bitte erneut eingeben'));
}

//Now here are all the outputs

document.write(`Die Zahl ${input2} kommt ${countNum(numArray, input2)} oft vor! <br>`);
document.write(`${outputSpecialNumbers(numArray)} sind alle Zahlen, die durch 2 && / || 5 teilbar sind <br>`);
document.write(
  `Die gesuchte Nummer befindet sich auf der/den Index-Position(en) ${getIndexPos(
    numArray,
    input2
  )} <br>`
);
