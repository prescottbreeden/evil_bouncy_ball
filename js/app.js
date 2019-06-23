'use strict'

const HEIGHT = window.innerHeight - 30;
const WIDTH = window.innerWidth - 30;
const CANVAS = document.getElementById('ctx');
const CONTEXT = CANVAS.getContext('2d');
CANVAS.width = WIDTH;
CANVAS.height = HEIGHT;
CANVAS.style = "border: 2px solid black";
const G = 1;

let balls = createBalls(2);
window.requestAnimationFrame(animationLoop);

function animationLoop() {
  CONTEXT.clearRect(0, 0, WIDTH, HEIGHT);
  balls = balls.map(draw);
  window.requestAnimationFrame(animationLoop);
}