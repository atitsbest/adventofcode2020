fs = require("fs");

const input = fs.readFileSync("./input.txt", "utf-8").split("\r\n");

const fst = (str) => str.substring(0, 1);
const rst = (str) => str.substring(1);

function getSeatNumber(str) {
  const rowStr = str.replace(/[RL]*/g, "").trim();
  const colStr = str.replace(/[FB]*/g, "").trim();
  const rowRange = [0, 127];
  const colRange = [0, 7];
  return (
    findValue(rowRange, fst(rowStr), rst(rowStr), "F") * 8 +
    findValue(colRange, fst(colStr), rst(colStr), "L")
  );
}

function findValue(range, half, rest, lower) {
  const [l, u] = range;
  if (half !== "" && u !== l) {
    const lr = [l, l + (u - l - 1) / 2];
    const ur = [l + (u - l + 1) / 2, u];
    return findValue(half === lower ? lr : ur, fst(rest), rst(rest), lower);
  }
  return u;
}

const max = Math.max.apply(null, input.map(getSeatNumber));
console.log("Result", max);
