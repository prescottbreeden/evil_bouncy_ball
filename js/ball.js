'use strict'

function Ball(ctx = null, radius = 10, color = 'red', x = 0, y = 0) {
  return {
    context: ctx,
    radius: radius,
    color: color,
    posX: x,
    posY: y,
    velocityX: 0,
    velocityY: 0,
  }
}

function createBalls(num, balls=[]) {
  if (num <= 0) return balls;
  return createBalls(
    num-1, 
    [ ...balls, 
      Ball(context, 10, 'green', ~~windowWidth/2, 80) ]
  )
}

function draw(ball) {
  ball.context.beginPath();
  ball.context.fillStyle = ball.color;
  ball.context.arc(ball.posX, ball.posY, ball.radius, 0, 2 * Math.PI);
  ball.context.fill();
  return applyGravity(ball);
}

function applyGravity(ball) {
  const gravity = 1;
  return moveY({
    ...ball,
    velocityY: ball.velocityY + gravity,
  })
}

function moveY(ball) {
  return bounce({
    ...ball,
    posY: ball.posY + ball.velocityY,
  })
}

function bounce(ball) {
  if (ball.posY + ball.radius > windowHeight) {
    return reverseDirection(ball);
  }
  return ball;
}

function reverseDirection(ball) {
  return friction({
    ...ball,
    velocityY: ball.velocityY * -1,
    posY: windowHeight - ball.radius
  })
}

function friction(ball) {
  return {
    ...ball,
    velocityY: ball.velocityY + 1
  }
}