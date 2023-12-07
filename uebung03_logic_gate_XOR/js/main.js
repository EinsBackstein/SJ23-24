/*
Project: uebung03_logic_gate_XOR
Author:  nottj
Date: 03.10.2023
*/

'use strict';

const appName = 'Übung03 Logic Gate XOR';
document.getElementById('myTitle').innerText = appName;
document.getElementById('myHeading').innerText = appName;

//gui

//inputs

const inA = document.getElementById('inputA');
const inB = document.getElementById('inputB');

//button

const btnResult = document.getElementById('result');

//outputs

const outIn1 = document.getElementById('in1');
const outIn2 = document.getElementById('in2');
const outIn3 = document.getElementById('in3');
const outIn4 = document.getElementById('in4');
const outOut1 = document.getElementById('out1');
const outOut2 = document.getElementById('out2');
const outQ = document.getElementById('Q');
const outXNOR = document.getElementById('xnor');

//functions

//This function simulates an "and-gate"

function and (inA, inB){
  return inA&&inB;
}

//This function simulates an "or-gate"

function or (inA, inB){
  return inA||inB;
}

//This function simulates an "not-gate"

function not (input){
  return !input;
}

//This function simulates an "nand-gate"

function nand (inA, inB){
  return not(and(inA, inB));
}

//This function checks if an input is either 0 or 1

function checkInput(input){
  if(input != 0 && input != 1){
    return false;
  }
  return true;
}

//main-code

//Event Handling

btnResult.onclick = function(){

  //First all the outputs are set empty
  outIn1.innerText='';
  outIn2.innerText='';
  outIn3.innerText='';
  outIn4.innerText='';
  outOut1.innerText='';
  outOut2.innerText='';
  outQ.innerText='';
  outXNOR.innerText='';


  //Then value A and B are converted into boolean values
  let A = Boolean(Number(inA.value));
  let B = Boolean(Number(inB.value));

  //Now the inputs are checked. If they are not ok, an error message is returned
  if(checkInput(inA.value)==false||checkInput(inB.value)==false){
    alert('Eingabe nicht korrekt');
    return;
  }

  //Here all inputs are displayed
  outIn1.innerText=`In1 = ${A}`; 
  outIn2.innerText=`In2 = ${B}`; 
  outIn3.innerText=`In3 = ${B}`; 
  outIn4.innerText=`In4 = ${A}`; 

  //Here the two outputs are displayed
  outOut1.innerText=`Out1 = ${nand(A, B)}`;
  outOut2.innerText=`Out2 = ${or(B, A)}`;

  //And here the Q-value and the XNOR-value are displayed
  outQ.innerText=`Q = ${and(nand(A, B),or(B, A))}`;
  outXNOR.innerText=`XNOR = ${not(and(nand(A, B),or(B, A)))}`;
};

