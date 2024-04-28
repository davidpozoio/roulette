export function drawLine({
  degrees,
  radius,
  ctx,
  optionName,
  constantDegree = 0,
}) {
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.moveTo(0, 0);
  let angle = (degrees * Math.PI) / 180;
  ctx.lineTo(radius * Math.cos(angle), radius * Math.sin(angle));
  ctx.stroke();

  const myAngle = (degrees * Math.PI) / 180 + constantDegree / 2;

  ctx.rotate(myAngle);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.font = "30px Arial";
  ctx.fillText(optionName, 60, 5);
  ctx.rotate(-myAngle);
}

export function drawRoulette({
  ctx,
  position: { x = 100, y = 100 },
  radius = 45,
  rotationDegree = 0,
  segments = 2,
  options = [],
}) {
  //rotate the canvas to make the move of the roulette

  ctx.beginPath();
  ctx.moveTo(650, 100);
  ctx.lineTo(600, 155);
  ctx.lineTo(670, 140);
  ctx.fill();

  ctx.translate(x, y);
  ctx.rotate((rotationDegree * Math.PI) / 180);
  //draw the circuference
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.stroke();

  //draw the strokes of each segment
  const segmentAngle = Math.floor(360 / segments);
  let angle = segmentAngle;
  drawLine({
    degrees: 0,
    radius,
    ctx,
    optionName: options?.[0],
    constantDegree: segmentAngle,
  });
  new Array(segments - 1).fill(0).forEach((_, index) => {
    drawLine({
      degrees: angle,
      radius,
      ctx,
      optionName: options?.[index + 1],
      constantDegree: segmentAngle,
    });
    angle += segmentAngle;
  });

  ctx.translate(-x, -y);
}
