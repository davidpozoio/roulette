const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function drawLine(degrees, radius) {
  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.moveTo(0, 0);
  let angle = (degrees * Math.PI) / 180;
  ctx.lineTo(radius * Math.cos(angle), radius * Math.sin(angle));
  ctx.stroke();
}

function drawRoulette({
  ctx,
  position: { x = 100, y = 100 },
  radius = 45,
  rotationDegree = 0,
  segments = 2,
}) {
  //rotate the canvas to make the move of the roulette
  ctx.translate(x, y);
  ctx.rotate((rotationDegree * Math.PI) / 180);
  //draw the circuference
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.stroke();

  //draw the strokes of each segment
  const segmentAngle = Math.floor(360 / segments);
  let angle = segmentAngle;
  drawLine(0, radius);
  new Array(segments - 1).fill(0).forEach(() => {
    drawLine(angle, radius);
    angle += segmentAngle;
  });

  ctx.translate(-x, -y);
}

let rotationDegree = 0;

function main() {
  canvas.width = canvas.width;
  drawRoulette({
    ctx,
    position: { x: 200, y: 200 },
    radius: 170,
    rotationDegree,
    segments: 1,
  });

  rotationDegree += 1;
  requestAnimationFrame(main);
}

requestAnimationFrame(main);
