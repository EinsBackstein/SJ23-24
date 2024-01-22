/*
Project: uebung013a_class_diagram_rectangle
Author:  nottj
Date: 16.01.2024
*/

'use strict';

const appName = 'Übung13a Klassendiagramme Rechteck';
document.getElementById('myTitle').innerText = appName;
document.getElementById('myHeading').innerText = appName;

class Rectangle {
  constructor(ctx, startX, startY, width, height, color) {
    this.ctx=ctx;
    this.startX=startX;
    this.startY=startY;
    this.width=width;
    this.height=height;
    this.color=color;  
  }
  draw(){

  }
  clear(){

  }
  move(deltaX, deltaY){

  }
}


