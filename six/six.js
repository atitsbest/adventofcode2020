fs = require("fs");

const input = fs
  .readFileSync("./input.txt", "utf-8")
  .split(/^\r\n/gm)
  .map((l) => l.trim().split("\r\n"));

console.log(input);

function answerCount(group) {
  const result = group
    .join("")
    .split("")
    .reduce((p, c) => ({ ...p, [c]: true }), {});
  return Object.keys(result).length;
}

function answerCount2(group) {
  const gc = group.length;
  const result = group
    .join("")
    .split("")
    .reduce((p, c) => ({ ...p, [c]: (p[c] || 0) + 1 }), {});
  return Object.keys(result).reduce(
    (p, c) => (p += result[c] === gc ? 1 : 0),
    0
  );
}

console.log(
  "Result",
  input.map(answerCount).reduce((p, c) => p + c, 0),
  input.map(answerCount2).reduce((p, c) => p + c, 0)
);
