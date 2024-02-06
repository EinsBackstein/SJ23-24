/*
Project: uebung014_static_properties_methods_circle
Author:  nottj
Date: 31.01.2023
*/

'use strict';

const appName = 'Übung14 Static Properties Circle';
document.getElementById('myTitle').innerText = appName;
document.getElementById('myHeading').innerText = appName;


//class

class Circle{
  #color;
  #instanceId;

  static circleInfo = 'Die Klasse \'Circle\' beinhaltet den Radius sowie X- und Y-Koordinaten des Mittelpunkts, eine Farbe und eine fortlaufende ID';
  static #instanceCounter = 1;

  constructor(radius, centerX, centerY, color){
    this.radius = radius;
    this.centerX = centerX;
    this.centerY = centerY;
    this.color = color;
    this.#instanceId = Circle.#instanceCounter++;
  }

  //getter

  get color(){
    return this.#color;
  }
  
  get instanceId(){
    return this.#instanceId;
  }

  static get instanceCounter(){
    return this.#instanceCounter;
  }

  //setter

  set color(value){
    if(value == 'black' || value == 'red' || value == 'green'){
      this.#color = value;
    }else{
      this.#color = 'black';
    }
  }

  //methods

  getCircumference(){
    return 2*this.radius*Math.PI;
  }
  
  getArea(){
    return Math.PI*this.radius**2;
  }

  getCircleInfo(){
    return String(`${Circle.circleInfo}, Mittelpunkt: ${this.centerX},${this.centerY}, Radius: ${this.radius}, Farbe: ${this.#color}`);
  }

  static hasSameCenter(circleA, circleB){
    if(circleA.centerX == circleB.centerX && circleA.centerY == circleB.centerY){
      return true;
    }
    return false;
  }

  static compareCircles(circleA, circleB){
    if(circleA.radius > circleB.radius){
      return 1;
    }
    if(circleA.radius < circleB.radius){
      return -1;
    }
    if(circleA.radius == circleB.radius){
      return 0;
    }
  }

  static setCenter(circleA, circleB){
    circleB.centerX = circleA.centerX;
    circleB.centerY = circleA.centerY;
  }

}

//circle objects

let circleA = new Circle(10, 50, 50, 'red');
let circleB = new Circle(20, 50, 50, 'green');
let circleC = new Circle(20, 100, 100, 'green');

//checks

console.log(circleA.getArea());
console.log(circleA.getCircumference());
console.log(circleB.getCircleInfo());

console.log(Circle.compareCircles(circleA, circleB));
console.log(Circle.hasSameCenter(circleA, circleB));
Circle.setCenter(circleA, circleC);
console.log(circleC.getCircleInfo());




