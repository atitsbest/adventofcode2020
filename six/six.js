fs = require("fs");

const input = fs
  .readFileSync("./input.txt", "utf-8")
  .split(/^\r\n/gm)
  .map((l) => l.trim().replace(/\r\n/gm, ""));

function answerCount(group) {
  const result = group.split("").reduce((p, c) => ({ ...p, [c]: true }), {});
  return Object.keys(result).length;
}

console.log(
  "Result",
  input.map(answerCount).reduce((p, c) => p + c, 0)
);
