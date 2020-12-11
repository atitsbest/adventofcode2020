fs = require("fs");

const input = fs
  .readFileSync("./input.txt", "utf-8")
  .split("\r\n")
  .map((l) => l.split(""));

function isTree(map, x, y) {
  const _x = x % map[y].length;
  return map[y][_x] === "#";
}

function traverse(map, stepX, stepY) {
  let y = stepY;
  let x = stepX;
  let treeCount = 0;
  do {
    if (isTree(map, x, y)) {
      treeCount += 1;
    }
    y += stepY;
    x += stepX;
  } while (y < map.length);
  return treeCount;
}

const result = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
].map(([x, y]) => traverse(input, x, y));
console.log(
  "Result",
  result.reduce((a, b) => a * b, 1)
);
