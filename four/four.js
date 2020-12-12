fs = require("fs");

const input = fs
  .readFileSync("./input.txt", "utf-8")
  .split(/^\r\n/gm)
  .map((pp) =>
    pp
      .replace(/\r\n/gm, " ")
      .trim()
      .split(" ")
      .reduce((p, c) => {
        const cs = c.split(":");
        return { ...p, [cs[0]]: cs[1] };
      }, {})
  );

function correctPassport(p) {
  const keys = Object.keys(p);
  return keys.length === 8 || (keys.length === 7 && keys.indexOf("cid") === -1);
}

const correctCount = input.reduce(
  (p, c) => (p += correctPassport(c) ? 1 : 0),
  0
);
console.log("Result", correctCount, "of", input.length);
