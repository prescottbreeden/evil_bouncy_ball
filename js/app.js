'use strict'

const windowHeight = window.innerHeight - 30;
const windowWidth = window.innerWidth - 30;
const canvas = document.getElementById('ctx');
const context = canvas.getContext('2d');
canvas.width = windowWidth;
canvas.height = windowHeight;
canvas.style = "border: 2px solid black";

let balls = createBalls(1);
window.requestAnimationFrame(animationLoop);

function animationLoop() {
  context.clearRect(0, 0, windowWidth, windowHeight);
  balls = balls.map(draw);
  window.requestAnimationFrame(animationLoop);
}

function createCanvas() {

}
