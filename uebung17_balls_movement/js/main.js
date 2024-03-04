/* Project: uebung17_balls_movement
Author:  nottj
Date: 28.02.2024 */

'use strict';
const appName = 'uebung17 Balls Movement';
document
  .getElementById('myTitle')
  .innerText = appName;
document
  .getElementById('myHeading')
  .innerText = appName;

let myCanvas = document.getElementById('myCanvas'); // Canvas the area you draw in
myCanvas.width = 800; //width of the canvas (in pixel)
myCanvas.height = 800; //height of the canvas (in pixel)

let ctx = myCanvas.getContext('2d'); // ctx is short for 'Context' and is the drawing level

ctx.fillStyle = 'white'; //sets color to black
ctx.fillRect(0, 0, myCanvas.width, myCanvas.height); //creates a rectangle and fills it with a white color
ctx.strokeStyle = 'black';
ctx.strokeRect(0, 0, myCanvas.width, myCanvas.height); //creates a black border around the canvas


//class Ball
class Ball{
  //The Ball has X- and Y-coords, a radius, a speed in X- and Y-directions, a value for both starting directions and a color
  constructor(posX, posY, radius, keyLeft, keyRight, keyUp, keyDown, color){
    this.posX = posX;
    this.posY = posY;
    this.radius = radius;
    this.keyLeft = keyLeft;
    this.keyRight = keyRight;
    this.keyUp = keyUp;
    this.keyDown = keyDown;
    this.color = color;
  }

  //draws the circle
  draw(context){
    context.beginPath();
    context.fillStyle = this.color;
    context.arc(this.posX,this.posY,this.radius,0, 2*Math.PI, true);
    context.fill();
    context.stroke();
  }


  //moves the ball left
  left(){
    if(!(this.posX - this.radius <= 0)){
      this.posX -= 5;
    }
  }
  //moves the ball right
  right(){
    if(!(this.posX + this.radius >= myCanvas.width)){
      this.posX += 5;
    }
  }
  //moves the ball up
  up(){
    if(!(this.posY - this.radius <= 0)){
      this.posY -= 5;
    }
  }
  //moves the ball down
  down(){
    if(!(this.posY + this.radius >= myCanvas.height)){
      this.posY += 5;
    }
  }

  //checks, if the input matches with any of the movement keys and moves, if needed
  checkKey(input){
    if(input == this.keyLeft){
      this.left();
    }
    if(input == this.keyRight){
      this.right();
    }
    if(input == this.keyUp){
      this.up();
    }
    if(input == this.keyDown){
      this.down();
    }
  }
}

//ball array + balls

let ballArray = [];

let ball1 = new Ball(100,100,15,'ArrowLeft','ArrowRight','ArrowUp','ArrowDown','cyan');
let ball2 = new Ball(200,200,25,'a','d','w','s','red');

ballArray.push(ball1);
ball1.draw(ctx);
ballArray.push(ball2);
ball2.draw(ctx);

//functions

//emptys the canvas
function emptyCanvas(){
  ctx.fillStyle = 'white'; //sets color to black
  ctx.fillRect(0, 0, myCanvas.width, myCanvas.height); //creates a rectangle and fills it with a white color
  ctx.strokeStyle = 'black';
  ctx.strokeRect(0, 0, myCanvas.width, myCanvas.height); //creates a black border around the canvas
}

//moves the ball
function moveBall(e){
  let keyPressed = e.key;
  emptyCanvas();
  for(let ball of ballArray){
    ball.checkKey(keyPressed);
    ball.draw(ctx);
  }
}


//event listener
document.addEventListener('keydown', moveBall);

