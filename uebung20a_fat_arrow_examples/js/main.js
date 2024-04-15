/*
Project: uebung20a_arrow_examples
Author:  nottj
Date: 10.04.2024
*/

'use strict';

const appName = 'Übung20a Arrow Examples';
document.getElementById('myTitle').innerText = appName;
document.getElementById('myHeading').innerText = appName;

const calcScope = (a,b,c) => {
  return a+b+c;
};

const calcArea = (radius) => {
  return 2*radius*Math.PI;
};

const sewAlert = () => {
  alert('Heute ist SEW');
};

const compareNum = (num1, num2) => {
  return num1 > num2 ? num1 : num2;
};


console.log(calcScope(1,2,3));
console.log(calcArea(5));
console.log(compareNum(1,2));