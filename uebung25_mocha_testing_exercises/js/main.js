/*
Project: uebung25_mocha_testing_exercises
Author:  nottj
Date: 14.05.2024
*/

'use strict';

// const appName = 'Calculator';
// document.getElementById('myTitle').innerText = appName;
// document.getElementById('myHeading').innerText = appName;

const output1 = document.getElementById('output1');

//functions

//checks difference between two numbers and if their value is between 10 & 100

const checkDif = (num1,num2) => {
  let dif = num1-num2;
  if(dif >= 10 && dif <=100){
    return true;
  } 
  return false;
};

//counts how often a number is in an array

const countNums = (arr, num) => {
  let nums = arr.filter((n) => n == num);
  return nums.length;
};

//class Circle

class Circle{
  constructor(radius, x, y){
    this.radius = radius;
    this.x = x;
    this.y = y;
  }

  //checks circle symetry

  static checkCircle(circle1, circle2){
    if(circle1.x == circle2.x && circle1.y == circle2.y && circle1.radius == circle2.radius){
      return 0;
    }else if(circle1.x == circle2.x && circle1.y == circle2.y){
      return -1;
    }
    return 1;
  }
}

//class Printer

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
      return this.#currentPaper;
    }
  }

  //fills up the printer

  fillPrinter(){
    this.#currentPaper = this.#maxPaper;
    return this.#currentPaper;
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