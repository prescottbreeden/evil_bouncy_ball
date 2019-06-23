'use strict'

function Ball(ctx = null, radius = 10, color = 'red', x = 0, y = 0) {
  return {
    context: ctx,
    radius: radius,
    color: color,
    posX: x,
    posY: y,
    velocityX: 0,
    velocityY: 0
  }
}

function applyGravity(ball) {
  return {
    ...ball,
    velocityY: ball.velocityY + 1,
    posY: ball.posY + ball.velocityY,
  }
}

function reverseDirection(ball) {
  return {
    ...ball,
    velocityY: ball.velocityY * -1
  }
}

function bounce(ball) {
  if (ball.posY >= HEIGHT) {
    console.log(ball.velocityY);
    return reverseDirection(ball)
  }
  return ball;
}

function draw(ball) {
  ball.context.beginPath();
  ball.context.fillStyle = ball.color;
  ball.context.arc(ball.posX, ball.posY, ball.radius, 0, 2 * Math.PI);
  ball.context.fill();
  return bounce(applyGravity(ball));
}

function createBalls(num, balls=[]) {
  if (num <= 0) return balls;
  return createBalls(
    num-1, 
    [ ...balls, 
      Ball(CONTEXT, 10, 'green', ~~WIDTH/2, 80) ]
  )
}
