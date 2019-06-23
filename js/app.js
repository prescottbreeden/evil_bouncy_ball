'use strict'

const HEIGHT = window.innerHeight - 20;
const WIDTH = window.innerWidth - 20;
const CANVAS = document.getElementById('ctx');
const CONTEXT = CANVAS.getContext('2d');
CANVAS.width = WIDTH;
CANVAS.height = HEIGHT;

let balls = createBalls(1)
window.requestAnimationFrame(animationLoop);

function animationLoop() {
  CONTEXT.clearRect(0, 0, WIDTH, HEIGHT);
  balls = balls.map(draw);
  window.requestAnimationFrame(animationLoop);
}