fs = require("fs");

const input = fs.readFileSync("./input.txt", "utf-8").split("\r\n");

const fst = (str) => str.substring(0, 1);
const rst = (str) => str.substring(1);

function getSeatNumber(str) {
  const rowStr = str.replace(/[RL]*/g, "").trim();
  const colStr = str.replace(/[FB]*/g, "").trim();
  return (
    findValue([0, 127], fst(rowStr), rst(rowStr), "F") * 8 +
    findValue([0, 7], fst(colStr), rst(colStr), "L")
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

const seatnumbers = input.map(getSeatNumber).sort((a, b) => a - b);
const max = Math.max.apply(null, seatnumbers);
const mySeatNr =
  seatnumbers[
    seatnumbers
      .map((s, idx) => (idx === 0 ? 0 : s - seatnumbers[idx - 1]))
      .indexOf(2) - 1
  ] + 1;
console.log("Result", max, "my seat", mySeatNr);
