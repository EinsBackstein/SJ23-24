/*
Project: uebung22_powermanagement
Author:  nottj
Date: 23.04.2024
*/

'use strict';

const appName = 'Übung22 Power Management';
document.getElementById('myTitle').innerText = appName;
document.getElementById('myHeading').innerText = appName;

//gui

//inputs

const inCreateName = document.getElementById('inCreateName');
const inCreatePower = document.getElementById('inCreatePower');
const inCreateHours = document.getElementById('inCreateHours');

const inRunName = document.getElementById('inRunName');
const inRunHours = document.getElementById('inRunHours');

const inDelete = document.getElementById('inDelete');

const inSearchPower = document.getElementById('inSearchPower');
const inSearchLetters = document.getElementById('inSearchLetters');

//buttons

const btnCreate = document.getElementById('btnCreate');
const btnRun = document.getElementById('btnRun');

const btnDelete = document.getElementById('btnDelete');

const btnSearchA = document.getElementById('btnSearchA');
const btnSearchNames = document.getElementById('btnSearchNames');
const btnSearchPower = document.getElementById('btnSearchPower');
const btnSearchLetters = document.getElementById('btnSearchLetters');
const btnSearchAveragePower = document.getElementById('btnSearchAveragePower');
const btnSearchOperatingTime = document.getElementById('btnSearchOperatingTime');

//outputs

const out1 = document.getElementById('out1');
const out2 = document.getElementById('out2');

//class

class Machine {
  #power;
  #operatingTime;
  constructor(name, power, time) {
    this.name = name;
    this.power = Number(power);
    this.operatingTime = time;
  }

  get powerConsumption() {
    return (this.#power * this.#operatingTime) / 1000;
  }

  get power() {
    return this.#power;
  }

  get operatingTime() {
    return this.#operatingTime;
  }

  set power(value) {
    if (isNaN(value) || value < 0) {
      throw new Error('ungültiger Wert bei Eingabe von Stromverbrauch');
    } else {
      this.#power = value;
    }
  }

  set operatingTime(value) {
    if (isNaN(value) || value < 0) {
      throw new Error('ungültiger Wert bei eingabe von Betriebsdauer');
    } else {
      this.#operatingTime = value;
    }
  }

  equals(otherMachine) {
    if (this.name === otherMachine.name) {
      return true;
    }
    return false;
  }

  run(time) {
    if (isNaN(time) || time < 0) {
      throw new Error('ungültiger Wert bei eingabe von Betriebsdauer');
    } else {
      this.#operatingTime += time;
    }
  }
}

//functions

let create = (machine, array) => {
  let hasMachine = false;
  for (let mach of array) {
    if (machine.equals(mach) == true) {
      hasMachine = true;
    }
  }
  if (hasMachine == false) {
    array.push(machine);
    return true;
  } else {
    throw new Error('Maschine konnte nicht hinzugefügt werden, da sich ein ähnliches Modell bereits in der Liste befindet');
  }
};

let remove = (machine, array) => {
  let i = 0;
  for(let mach of array){
    if(mach.name == machine){
      array.splice(i,1);
      return true;
    }
    i++;
  }
  throw new Error('Zu löschende Maschine konnte nicht gefunden werden, bitte auf Eingabe prüfen');
};

let run = (machine, array, time) => {
  for(let mach of array){
    if(mach.name == machine){
      mach.run(time);
      return true;
    }
  }
  throw new Error('Maschine konnte nicht gefunden werden, bitte auf Eingabe prüfen');
};

let searchA = (array) => {
  let output = '<thead><td>Gerätename</td><td>Stromverbrauch</td><td>Betriebszeit</td></thead>';
  for(let machine of array){
    output += `<tr><td>${machine.name}</td><td>${machine.power}</td><td>${machine.operatingTime}</td></tr>`;
  }
  return output;
};

let searchNames = (array) => {
  let names = array.map((m) => m.name);
  let output = 'Gerätenamen: ';
  for(let name of names){
    output += `${name}, `;
  }
  return output;
};

let searchPower = (power, array) => {
  let powerArray = array.filter((m) => m.power >= power);
  let output = '<thead><td>Gerätename</td><td>Stromverbrauch</td><td>Betriebszeit</td></thead>';
  for(let machine of powerArray){
    output += `<tr><td>${machine.name}</td><td>${machine.power}</td><td>${machine.operatingTime}</td></tr>`;
  }
  return output;
};

let searchLetters = (letters, array) => {
  if(letters.length < 3){
    throw new Error('Bitte mindestens 3 Buchstaben eingeben');
  }

  let filteredByLetters = array.filter((m) => m.name.includes(letters));
  let output = '<thead><td>Gerätename</td><td>Stromverbrauch</td><td>Betriebszeit</td></thead>';
  for(let machine of filteredByLetters){
    output += `<tr><td>${machine.name}</td><td>${machine.power}</td><td>${machine.operatingTime}</td></tr>`;
  }
  return output;
};

let getAveragePower = (array) => {
  let avrg = array.reduce((sum, machine) => sum + Number(machine.power),0);
  return `Durchschnittsleistung: ${avrg / array.length}`;
};

let sortByOperatingTime = (array) => {
  let sortedArray = array.sort((m1,m2) => m2.operatingTime - m1.operatingTime);
  let output = '<thead><td>Gerätename</td><td>Stromverbrauch</td><td>Betriebszeit</td></thead>';
  for(let machine of sortedArray){
    output += `<tr><td>${machine.name}</td><td>${machine.power}</td><td>${machine.operatingTime}</td></tr>`;
  }
  return output;
};

//array

let machines = [];

//event-handling

btnCreate.onclick = () => {
  try {
    create(new Machine(inCreateName.value, Number(inCreatePower.value), Number(inCreateHours.value)),machines);
  } catch (error) {
    alert(error);
  }
};

btnRun.onclick = () => {
  try {
    run(inRunName.value, machines, Number(inRunHours.value));
  } catch (error) {
    alert(error);
  }
};

btnDelete.onclick = () => {
  try {
    remove(inDelete.value, machines);
  } catch (error) {
    alert(error);
  }
};

btnSearchA.onclick = () => {
  out1.innerHTML = '';
  out2.innerHTML = '';

  out1.innerHTML = searchA(machines);
};

btnSearchNames.onclick = () => {
  out1.innerHTML = '';
  out2.innerHTML = '';

  
  out2.innerHTML = searchNames(machines);
};

btnSearchPower.onclick = () => {
  out1.innerHTML = '';
  out2.innerHTML = '';

  out1.innerHTML = searchPower(Number(inSearchPower.value), machines);
};

btnSearchLetters.onclick = () => {
  out1.innerHTML = '';
  out2.innerHTML = '';

  out1.innerHTML = searchLetters(inSearchLetters.value, machines);
};

btnSearchAveragePower.onclick = () => {
  out1.innerHTML = '';
  out2.innerHTML = '';

  out2.innerHTML = getAveragePower(machines);
};

btnSearchOperatingTime.onclick = () => {
  out1.innerHTML = '';
  out2.innerHTML = '';

  out1.innerHTML = sortByOperatingTime(machines);
};