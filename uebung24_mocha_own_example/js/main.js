/*
Project: uebung24_mocha_own_example
Author:  nottj
Date: 07.05.2024
*/

'use strict';

// const appName = 'Calculator';
// document.getElementById('myTitle').innerText = appName;
// document.getElementById('myHeading').innerText = appName;

const output1 = document.getElementById('output1');

//functions


//adds two numbers
const add = (num1, num2) =>{
  num1 = Number(num1);
  num2 = Number(num2);
  return num1+num2;
};

//subtracts two numbers
const sub = (num1, num2) => {
  num1 = Number(num1);
  num2 = Number(num2);
  return num1-num2;
};

//multiplys two numbers
const mult = (num1, num2) => {
  num1 = Number(num1);
  num2 = Number(num2);
  return num1*num2;
};

//divides two numbers (no division by zero)
const div = (num1, num2) => {
  num1 = Number(num1);
  num2 = Number(num2);
  if(num2!=0){
    return num1/num2;
  }else{
    return false;
  }
};

//squares a number
const square = (num1) => {
  num1 = Number(num1);
  return num1**2;
};

//powers a number to the exponent of the value of the second number
const pow = (num1, num2) => {
  num1 = Number(num1);
  num2 = Number(num2);
  return Math.pow(num1, num2);
};

//calculates the root of a value of the second number for the first number
const root = (num1, num2) => {
  num1 = Number(num1);
  num2 = Number(num2);
  return num1**(1/num2);
};

