/**
 * Project: Classes - Geometric Forms
 * Author:  nottj
 * Date: 1.11.2023
 */

'use strict';

const canvasSizeX = window.innerWidth - window.innerWidth / 10;
const canvasSizeY = window.innerHeight - window.innerHeight / 10;

let myCanvas = document.getElementById('myCanvas');
myCanvas.width = canvasSizeX;
myCanvas.height = canvasSizeY;

const ctx = myCanvas.getContext('2d');
const colorRectFill = 'lightGray';
const colorRectStroke = '#000000';
ctx.fillStyle = colorRectFill;
ctx.strokeStyle = colorRectStroke;

ctx.fillRect(0, 0, myCanvas.width, myCanvas.height); 
ctx.strokeRect(0, 0, myCanvas.width, myCanvas.height); 

const inputColor = document.getElementById('inputColor');
const btnDraw = document.getElementById('btnDraw');
const output = document.getElementById('output');

//Here I made a new input for the stroke-color
const strokeColor = document.getElementById('strokeColor');

// Class representing a circle 
class Circle {
  constructor(ctx, centerX, centerY, radius) {
    this.context = ctx;
    this.centerX = centerX;
    this.centerY = centerY;
    this.radius = radius;
    this.fillColor = inputColor.value; //Here i made it so the circles would get set to the color of the input-field
    this.strokeStyle = strokeColor.value;
  }
  draw() {
    this.context.beginPath();
    this.context.fillStyle = this.fillColor;//The fillcolor actually gets set and later filled
    this.context.arc(this.centerX, this.centerY, this.radius, 0, 2 * Math.PI);
    this.context.fill();
    this.context.strokeStyle=strokeColor.value;
    this.context.stroke();
  }
  setFillColor(color) {
    this.fillColor = color;
  }
}
//Here i made the class Line, which is there to create...a line
class Line {
  constructor(ctx, xStart, xEnd, yStart, yEnd, color){
    this.context = ctx;
    this.xStart = xStart;
    this.xEnd = xEnd;
    this.yStart = yStart;
    this.yEnd = yEnd;
    this.strokeStyle = color
  }
  draw() {
    this.context.beginPath();
    this.context.moveTo(this.xStart,this.yStart);
    this.context.lineTo(this.xEnd,this.yEnd);
    this.context.strokeStyle = this.strokeStyle;
    this.context.stroke();
  }
  isHorizontalOrVertical() {
    //Here the line gets checked if it is vertical, horizontal or neither
    if(this.xStart==this.xEnd){
      return true;
    }
    if(this.yStart==this.yEnd){
      return true;
    }
    return false;
  }
}
//Here i made a class which creates a rectangle
class Rect {
  constructor(ctx, xStart, yStart, width, height){
    this.context = ctx;
    this.xStart = xStart;
    this.yStart = yStart;
    this.width = width;
    this.height = height;
    this.fillColor = inputColor.value;
    this.strokeColor = strokeColor.value
  }
  draw(){
    ctx.fillStyle=this.fillColor;
    ctx.strokeStyle=this.strokeColor;
    ctx.strokeRect(this.xStart,this.yStart,this.width,this.height);
    ctx.fillRect(this.xStart,this.yStart,this.width,this.height);
  }
  isSqare(){
    if(this.width==this.height){
      return true;
    }
    return false;
  }
}
//Here i made a class which creates a triangle
class Triangle {
  constructor(ctx, x1, y1, x2, y2, x3, y3){
    this.context = ctx;
    this.x1 = x1;
    this.x2 = x2;
    this.x3 = x3;
    this.y1 = y1;
    this.y2 = y2;
    this.y3 = y3;
  }
  draw(){
    this.context.beginPath();
    this.context.moveTo(this.x1,this.y1);
    this.context.lineTo(this.x2,this.y2);
    this.context.lineTo(this.x3,this.y3);
    this.context.lineTo(this.x1,this.y1);
    this.context.fillStyle= inputColor.value;
    this.context.fill();
    this.context.strokeStyle=strokeColor.value;
    this.context.stroke();
  }
  checkTriangle(){
    let lengthSide1 = Math.sqrt((((this.x2-this.x1)*(this.x2-this.x1))+((this.y2-this.y1)*(this.y2-this.y1))));
    let lenghtSide2 = Math.sqrt((((this.x3-this.x2)*(this.x3-this.x2))+((this.y3-this.y2)*(this.y3-this.y2))));
    let lengthSide3 = Math.sqrt((((this.x1-this.x3)*(this.x1-this.x3))+((this.y1-this.y3)*(this.y1-this.y3))));

    if(lenghtSide1==lenghtSide2&&lengthSide1==lengthSide3){
      return 1;
    };
    if(lenghtSide1==lenghtSide2||lengthSide1==lengthSide3||lenghtSide2==lengthSide3){
      return -1
    }
    return 0
  }
}

btnDraw.onclick = function () {
  const circle1 = new Circle(ctx, 50, 50, 40);
  const circle2 = new Circle(ctx, 160, 60, 40);
  circle1.draw();
  circle2.draw();  

  //Here the extra circles are getting drawn
  const circle3 = new Circle(ctx, 190, 180, 60);
  const circle4 = new Circle(ctx, 40, 200, 20);
  const circle5 = new Circle(ctx, 90, 330, 80);
  circle3.draw();
  circle4.draw();
  circle5.draw();

  //Here the radius and coords of the second circle are getting put out

  output.innerHTML= `X-Position: ${circle2.centerX}, Y-Position: ${circle2.centerY}, Radius: ${circle2.radius}`;

  //Here the three lines are getting drawn

  const line1 = new Line(ctx,10,600, 10,600, "green");
  const line2 = new Line(ctx, 50,50,80,600, "blue");
  const line3 = new Line(ctx, 50,500,20,20, "red");
  line1.draw();
  line2.draw();
  line3.draw();


  const rect1 = new Rect(ctx, 100, 400, 100,50);
  rect1.draw();
  const rect2 = new Rect(ctx, 200, 300, 200,100);
  rect2.draw();
  const rect3 = new Rect(ctx, 300, 200, 50,50);
  rect3.draw();
  

  const trinagle1 = new Triangle(ctx,400,40,500,100,300,100);
  trinagle1.draw()
  const trinagle2 = new Triangle(ctx,600,100,650,200,550,200);
  trinagle2.draw()
  const trinagle3 = new Triangle(ctx,250,400,300,600,200,600);
  trinagle3.draw()
};



