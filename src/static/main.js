const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function drawLine(degrees, radius) {
  ctx.beginPath();
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
  ctx.translate(x, y);
  ctx.rotate((rotationDegree * Math.PI) / 180);
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.stroke();

  const areaOfSegment = Math.floor(360 / segments);

  drawLine(areaOfSegment, radius);
  drawLine(areaOfSegment * 2, radius);

  ctx.translate(-x, -y);
}

drawRoulette({
  ctx,
  position: { x: 100, y: 100 },
  radius: 40,
  rotationDegree: 0,
});
