fs = require("fs");

function correctPwd(min, max, char, pwd) {
  const count = pwd.split(char).length - 1;
  return count >= min && count <= max;
}

const input = fs
  .readFileSync("./input.txt", "utf-8")
  .split("\r\n")
  .map((l) => l.split(/[-\s:]+/));

console.log(
  "Result",
  input.map((i) => correctPwd.apply(null, i)).filter((r) => r === true).length
);
