fs = require("fs");

function correctPwd(min, max, char, pwd) {
  const count = pwd.split(char).length - 1;
  return count >= min && count <= max;
}

function correctPwdNew(idx1, idx2, char, pwd) {
  const a = pwd[idx1 - 1] === char;
  const b = pwd[idx2 - 1] === char;

  return (a && !b) || (!a && b); // JS XOR ;)
}

const input = fs
  .readFileSync("./input.txt", "utf-8")
  .split("\r\n")
  .map((l) => l.split(/[-\s:]+/));

console.log(
  "Result",
  input.map((i) => correctPwd.apply(null, i)).filter((r) => r === true).length,
  input.map((i) => correctPwdNew.apply(null, i)).filter((r) => r === true)
    .length
);
