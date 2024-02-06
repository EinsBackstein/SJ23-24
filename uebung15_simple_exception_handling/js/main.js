/*
Project: uebung015_simple_exception_handling (Printers)
Author:  nottj
Date: 06.02.2023
*/

'use strict';

const appName = 'Übung15 uebung015_simple_exception_handling (Printers)';
document.getElementById('myTitle').innerText = appName;
document.getElementById('myHeading').innerText = appName;

//gui

//inputs

const inName = document.getElementById('inName');
const inIP = document.getElementById('inIP');
const inMax = document.getElementById('inMax');
const inType = document.getElementById('inType');
const inRes = document.getElementById('inRes');
const inColor = document.getElementById('inColor');
const inMAC = document.getElementById('inMAC');

const inputs = document.getElementsByTagName('input');

//buttons

const btnSave = document.getElementById('btnSave');
const btnList = document.getElementById('btnList');
const btnSearch = document.getElementById('btnSearch');
const btnClear = document.getElementById('btnClear');
const btnEdit = document.getElementById('btnEdit');


//outputs

const output1 = document.getElementById('output1');
const output2 = document.getElementById('output2');

//class

class Printer{
  #macAddress;
  #ipAddress;
  #maxPaper;
  #printerType;
  #currentPaper;
  #colorPrinter;
  #printResolution;
  constructor(hostname, macAddress, ipAddress, maxPaper, printerType, colorPrinter, printResolution){
    this.hostname = hostname;
    this.macAddress = macAddress;
    this.ipAddress = ipAddress;
    this.maxPaper = maxPaper;
    this.printerType = printerType;
    this.#currentPaper = 0;
    this.colorPrinter = colorPrinter; //boolean
    this.printResolution = printResolution;
    if(Printer.lastOctett > 255){
      throw new Error('Zu viele Drucker im Netzwerk!');
    }
  }

  //getter

  get macAddress(){
    return this.#macAddress;
  }
  get ipAddress(){
    return this.#ipAddress;
  }
  get maxPaper(){
    return this.#maxPaper;
  }
  get printerType(){
    return this.#printerType;
  }
  get currentPaper(){
    return this.#currentPaper;
  }
  get colorPrinter(){
    return this.#colorPrinter;
  }
  get printResolution(){
    return this.#printResolution;
  }
  
  //setter

  set macAddress(value){
    if(this.#checkMAC(value) == true){
      this.#macAddress = value;
    }
  }
  set ipAddress(value){
    if(this.#checkIP(value)==true){
      this.#ipAddress = value;
    }else{
      this.#ipAddress = `192.168.1.${Printer.lastOctett}`;
      Printer.lastOctett++;
    }
  }
  set maxPaper(value){
    if(value <= 1500 && value >= 50){
      this.#maxPaper = value;
    }else{
      this.#maxPaper = 500;
    }
  }
  set printerType(value){
    if(value == 'Laser' || value == 'InkJet' || value == 'ColorLaser'){
      this.#printerType = value;
    }else{
      this.#colorPrinter = 'InkJet';
    }
  }
  set currentPaper(value){
    if(value <= this.#maxPaper){
      this.#currentPaper = value;
    }
  }
  set colorPrinter(value){
    if(value == true || value == false){
      this.#colorPrinter = value;
    }else{
      this.#colorPrinter = true;
    }
  }
  set printResolution(value){
    value = Number(value);
    if(value >= 300 && value <= 2400){
      this.#printResolution = value;
    }else{
      this.#printResolution = 1200;
    }
  }

  //methods (private)
  
  //checks if user entered a valid ip-address

  #checkIP(IP) {
    let ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/; if (IP.match(ipformat)) {
      return true; 
    } 
    return false; 
  }

  //checks if user entered a valid mac-address

  #checkMAC(MAC) {
    let macFormat = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
    if (MAC.match(macFormat)) {
      return true;
    }
    return false;
  }

  //public methods

  //prints x amount of pages

  printPages(pages){
    if(pages>0 && Number.isInteger(pages) == true && pages <= this.#currentPaper ){
      this.#currentPaper-pages;
    }
  }

  //fills up the printer

  fillPrinter(){
    this.#currentPaper = this.#maxPaper;
  }

  //checks, how much paper is in the printer

  paperStatus(){
    if(this.#currentPaper > 0){
      return true;
    }
    return false;
  }

  //returns all the infos about the printer

  getPrinterInfo(){
    return [
      String(`MAC: ${this.#macAddress}  `),
      String(` IP: ${this.#ipAddress}`),
      String(` Druckername: ${this.hostname}`),
      String(` Maximale Füllung: ${this.#maxPaper}`),
      String(` Aktueller Füllstand: ${this.#currentPaper}`),
      String(` Druckertyp: ${this.#printerType}`),
      String(` Farbdrucker: ${this.#colorPrinter}`),
      String(` Druckerauflösung: ${this.#printResolution}`),
    ];
  }
}
Printer.lastOctett = 1;

//functions

//checks the user input

function checkInput(input){
  if(input != ''){
    return true;
  }
  return false;
}

//generates a mac-address

function generateMAC(){
  let hex = '0123456789ABCDEF';
  let macAddress = '';
  for(let i = 0; i<6; i++){
    macAddress += hex.charAt(Math.round(Math.random() * 15));
    macAddress += hex.charAt(Math.round(Math.random() * 15));
    if(i < 5){
      macAddress += ':';
    }
  }
  return macAddress;
}

//adds a printer to the map

function addPrinter(map, hostname, ipAddress, maxPaper, printerType, printResolution, colorPrinter){
  let mac = generateMAC();

  while(map.has(mac)==true){
    mac = generateMAC();
  }

  let printer = new Printer(hostname, mac, ipAddress, maxPaper, printerType, colorPrinter, printResolution);
  map.set(printer.macAddress, printer);
  return true;
}

//map

const printers = new Map();

//Event Handling

//generates and saves a printer to the map

btnSave.onclick = function(){

  if(checkInput(inName.value) == true && checkInput(inMax.value) == true && checkInput(inType.value) == true && checkInput(inRes.value) == true && checkInput(inColor.checked) == true){

    addPrinter(printers, inName.value, inIP.value, inMax.value, inType.value, inRes.value, inColor.checked);
    output2.innerHTML='';
    output2.innerHTML = 'Drucker erfolgreich hinzugefügt';
    
    inputs.value = '';
    return true;
  }
  output2.innerHTML='';
  output2.innerHTML = 'Drucker konnte nicht hinzugefügt werden';
  return false;
};

//shows all the printers

btnList.onclick = function(){
  output1.innerHTML = '';
  let output = '';
  for(let value of printers.values()){
    output = output + '<br>' + value.getPrinterInfo();
  }
  output1.innerHTML = output;
};

//searches for one specific printer

btnSearch.onclick = function(){
  if(checkInput(inMAC.value)==true){
    if(printers.has(inMAC.value)==true){
      let output = printers.get(inMAC.value);
      let value = output.getPrinterInfo();
      output1.innerHTML='';
      output1.innerHTML=value;
      return true;
    }else{
      output2.innerHTML='';
      output2.innerHTML = 'Drucker konnte nicht gefunden werden';
      return false;
    }
  }
};

//clears the map

btnClear.onclick = function(){
  confirm('Wollen Sie wirklich alle Drucker aus dem System entfernen?') ? printers.clear() : false;
};

//edits one specific printer

btnEdit.onclick = function(){
  if(checkInput(inMAC.value)==true){
    if(printers.has(inMAC.value)==true){
      let output = printers.get(inMAC.value);
      if(checkInput(inName.value) == true){
        output.hostname = inName.value;
      }
      if(checkInput(inMax.value) == true){
        output.maxPaper = inMax.value;
      }
      if( checkInput(inType.value) == true ){
        output.printerType = inType.value;
      }
      if( checkInput(inRes.value) == true ){
        output.printResolution = inRes.value;
      }
      if( checkInput(inColor.checked) == true){
        output.colorPrinter = inColor.checked;
      }
      if(checkInput(inIP.value)==true){
        output.ipAddress = inIP.value;
      }
    }else{
      output2.innerHTML='';
      output2.innerHTML = 'Drucker konnte nicht gefunden werden';
      return false;
    }
  }
};
