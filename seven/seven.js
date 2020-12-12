fs = require("fs");

const input = fs.readFileSync("./input.txt", "utf-8").split("\r\n");

function prepare(str) {
  const regex = /^([a-z]*\s[a-z]*)\sbags\scontain/;
  const contains = str
    .replace(regex, "")
    .trim()
    .split(", ")
    .map((l) => l.replace(/\sbags?\.?/, ""))
    .reduce((p, c) => {
      if (c === "no other") return {};
      const [_, count, color] = c.match(/^(\d*)\s([a-z\s]*)/i);
      return { ...p, [color]: count };
    }, {});

  const color = str.match(regex)[1];
  return { [color]: contains };
}

function canHoldShinyGold(bag) {
  if (!bag) return false;
  if (bag["shiny gold"] > 0) return true;
  return Object.keys(bag).some((b) => canHoldShinyGold(bags[b]));
}

const bags = input.reduce((p, c) => ({ ...p, ...prepare(c) }), {});
const result = Object.keys(bags).reduce(
  (p, c) => (p += canHoldShinyGold(bags[c]) ? 1 : 0),
  0
);
console.log("Result", result);
