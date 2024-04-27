import { drawRoulette } from "./roulette/roulette.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const $options = document.getElementById("options");
const $startButton = document.getElementById("start");

let segments = 1;
let options = ["default"];

$options.addEventListener("input", (e) => {
  const evaluatedOptions = e.target?.value
    ?.split("\n")
    ?.filter((el) => !!el)
    ?.map((el, index) => `${index + 1}.- ${el}`);

  if (evaluatedOptions.length === 0) {
    options = ["default"];
  } else {
    options = evaluatedOptions;
  }

  segments = options?.length;
});

let rotationDegree = 0;
let velocity = 0;

$startButton.addEventListener("click", (e) => {
  e.target.disabled = true;
  velocity = 15;
  let time = 0;
  const interval = setInterval(() => {
    time++;
    velocity -= time * Math.random() * (2 - 1) + 1;
    if (velocity <= 0) {
      velocity = 0;
      clearInterval(interval);
      e.target.disabled = false;
    }
  }, 800);
});

function main() {
  canvas.width = canvas.width;
  drawRoulette({
    ctx,
    position: { x: 200, y: 200 },
    radius: 175,
    rotationDegree,
    segments,
    options,
  });

  rotationDegree += velocity;

  requestAnimationFrame(main);
}

requestAnimationFrame(main);
