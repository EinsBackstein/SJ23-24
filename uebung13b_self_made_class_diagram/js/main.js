/*
Project: uebung013b_self_made_class_diagram
Author:  nottj
Date: 16.01.2024
*/

'use strict';

const appName = 'Übung13b Selfmade Class Diagramm';
document.getElementById('myTitle').innerText = appName;
document.getElementById('myHeading').innerText = appName;

//gui

//inputs

const inBrand = document.getElementById('inBrand');
const inModel = document.getElementById('inModel');
const inCPU = document.getElementById('inCPU');
const inMemory = document.getElementById('inMemory');
const inMemorySpeed = document.getElementById('inMemorySpeed');
const inAge = document.getElementById('inAge');
const inMaxFrames = document.getElementById('inMaxFrames');
const inHandheld = document.getElementById('inHandheld');

//buttons

const btnSave = document.getElementById('btnSave');
const btnList = document.getElementById('btnList');
const btnClear = document.getElementById('btnClear');

//outputs

const output1 = document.getElementById('output1');
const output2 = document.getElementById('output2');

//class

class Console{
  #cpu;
  #memory;
  #memorySpeed;
  #age;
  #handheld;
  #maxFrames;
  #timePlayed;
  #hasBeenOverclocked;
  #id;
  constructor(brand, model, cpu, memory, memorySpeed, age, handheld, maxFrames){
    this.brand = brand;
    this.model = model;
    this.cpu = cpu;
    this.memory = memory;
    this.memorySpeed = memorySpeed;
    this.#age = age;
    this.#handheld = handheld;
    this.#maxFrames = maxFrames;
    this.#timePlayed = 0;
    this.#hasBeenOverclocked = false;
    this.#id = Console.ID++;
  }

  set cpu(value){
    if(value == 'AMD'|| value == 'Intel' || value == 'NVIDIA' || value == 'Qualcomm'){
      this.#cpu = value;
    }else{
      this.#cpu = 'NVIDIA';
    }
  }

  set memory(value){
    value = Number(value);
    if(Math.log2(value).isInteger == true && value >= 128){
      this.#memory = value;
    }else{
      this.#memory = 1024;
    }
  }

  set memorySpeed(value){
    if(value <= 10000){
      this.#memorySpeed = value;
    }else{
      this.#memorySpeed = 1000;
    }
  }

  set timePlayed(value){
    if(Number.isInteger(value)==true && value > 0){
      this.#timePlayed += value;
    }
  }

  get cpu(){
    return this.#cpu ;
  }

  get memory(){
    return this.#memory ;
  }

  get memorySpeed(){
    return this.#memorySpeed ;
  }

  get age(){
    return this.#age ;
  }

  get handheld(){
    return this.#handheld ;
  }

  get maxFrames(){
    return this.#maxFrames ;
  }

  get timePlayed(){
    return this.#timePlayed ;
  }

  get id(){
    return this.#id;
  }

  play(time){
    if(time > 1){
      time = Math.floor(time);
      this.#timePlayed += time;
      return true;
    }
    return false;
  }

  addMemory(value){
    if(Math.log2(value)%2 == 0){
      this.#memory *= value;
      return true;
    }
    return false;
  }

  overclock(){
    if(this.#hasBeenOverclocked==false){
      this.#maxFrames *= 1.1;
      return true;
    }
    return false;
  }
}
Console.ID = 1;

//map

const consoleMap = new Map();

//functions

//used to display table

function showTable(map) {
  let table = `
    <thead>
      <td>   Marke  </td>
      <td>   Modell  </td>
      <td>   CPU  </td>
      <td>   Speicherkapazität in GB  </td>
      <td>   Speichergeschwindigkeit in Mbps  </td>
      <td>   Alter der Konsole  </td>
      <td>   Handheld  </td>
      <td>   Maximale Frameanzahl  </td>
      <td>   Zeit gespielt  </td>
      <td>   ID  </td>
    </thead>`;

  for (let value of map.values()) {
    table += getTableRow(value);
  }
  return table;
}

//used to get table-row

function getTableRow(value)  {
  return `<tr><td>${value.brand}</td><td>${value.model}</td><td>${value.cpu}</td><td>${value.memory}</td><td>${value.memorySpeed}</td><td>${value.age}</td><td>${value.handheld}</td><td>${value.maxFrames}</td><td>${value.timePlayed}</td><td>${value.id}</td></tr>`;
}

//event-handling

//saves a console to the map

btnSave.onclick = function () {
  let console = new Console(inBrand.value, inModel.value, inCPU.value, inMemory.value, inMemorySpeed.value, inAge.value, inHandheld.checked, inMaxFrames.value);
  consoleMap.set(console.id, console);
};

//deletes everything

btnClear.onclick = function () {
  let confirmDelete = confirm('Wollen sie alle Konsolen unwiderruflich löschen?');
  if (confirmDelete == true) {
    consoleMap.clear();
  }
};

//lists all consoles

btnList.onclick = function () {
  output1.innerHTML = '';
  output1.innerHTML = showTable(consoleMap);
};


