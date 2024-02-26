/* Project: uebung1
Author:  nottj
Date: 26.02.2024 */

'use strict';
const appName = 'uebung02a_zeichnen_mit_canvas_basis';
document
  .getElementById('myTitle')
  .innerText = appName;
document
  .getElementById('myHeading')
  .innerText = appName;

let myCanvas = document.getElementById('myCanvas'); // Canvas the area you draw in
myCanvas.width = 1000; //width of the canvas (in pixel)
myCanvas.height = 1000; //height of the canvas (in pixel)

let ctx = myCanvas.getContext('2d'); // ctx is short for 'Context' and is the drawing level

ctx.fillStyle = 'white'; //sets color to black
ctx.fillRect(0, 0, myCanvas.width, myCanvas.height); //creates a rectangle and fills it with a white color
ctx.strokeStyle = 'black';
ctx.strokeRect(0, 0, myCanvas.width, myCanvas.height); //creates a black border around the canvas


//class Ball
class Ball{
  //The Ball has X- and Y-coords, a radius, a speed in X- and Y-directions, a value for both starting directions and a color
  constructor(posX, posY, radius, speedX, speedY, directionHorizontal, directionVertical, color){
    this.posX = posX;
    this.posY = posY;
    this.radius = radius;
    this.speedX = speedX;
    this.speedY = speedY;
    this.directionHorizontal = directionHorizontal; // 1||-1
    this.directionVertical = directionVertical; // 1||-1
    this.color = color;
  }


  //calculates the "next" Ball
  setNextPosition(){
    this.posX = this.posX+this.speedX*this.directionHorizontal;
    this.posY = this.posY+this.speedY*this.directionVertical;
  }

  //collider
  setDirection(){
    if(this.posX + this.radius >= myCanvas.width || this.posX - this.radius <= 0){
      this.directionHorizontal*=-1;
    }
    if(this.posY + this.radius >= myCanvas.height || this.posY - this.radius <= 0){
      this.directionVertical*=-1;
    }
  }

  //draws the circle
  draw(context){
    context.beginPath();
    context.fillStyle = this.color;
    context.arc(this.posX,this.posY,this.radius,0, 2*Math.PI, true);
    context.fill();
    context.stroke();
  }
}

let circle = new Ball(300,80,10,2,5,1,1,'cyan');


//cleans the canvas
function emptyCanvas(){
  ctx.fillStyle = 'white'; //sets color to black
  ctx.fillRect(0, 0, myCanvas.width, myCanvas.height); //creates a rectangle and fills it with a white color
  ctx.strokeStyle = 'black';
  ctx.strokeRect(0, 0, myCanvas.width, myCanvas.height); //creates a black border around the canvas
}


//loop - creates the animation
function loop(){
  emptyCanvas();
  circle.draw(ctx);
  circle.setDirection();
  circle.setNextPosition();

  window.requestAnimationFrame(loop);
}


//execution
loop();