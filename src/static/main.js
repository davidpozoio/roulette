import { drawRoulette } from "./roulette/roulette.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const $options = document.getElementById("options");
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

function main() {
  canvas.width = canvas.width;
  drawRoulette({
    ctx,
    position: { x: 200, y: 200 },
    radius: 170,
    rotationDegree,
    segments,
    options,
  });

  rotationDegree += 1;
  requestAnimationFrame(main);
}

requestAnimationFrame(main);
