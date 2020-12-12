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

const validators = {
  byr: (v) => v != null && parseInt(v, 10) >= 1920 && parseInt(v, 10) <= 2002,
  iyr: (v) => v != null && parseInt(v, 10) >= 2010 && parseInt(v, 10) <= 2020,
  eyr: (v) => v != null && parseInt(v, 10) >= 2020 && parseInt(v, 10) <= 2030,
  hgt: (v) => {
    if (v != null) {
      const cm = v.indexOf("cm") !== -1;
      const val = parseInt(v.replace(/[a-z]*/, ""), 10);
      return cm ? val >= 150 && val <= 193 : val >= 59 && val <= 76;
    }
    return false;
  },
  hcl: (v) => v != null && /^#[0-9a-f]{6}$/g.test(v),
  ecl: (v) =>
    v != null &&
    ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].indexOf(v) !== -1,
  pid: (v) => v != null && /^\d{9}$/g.test(v),
  cid: () => true,
};

function correctPassport2(pp) {
  return Object.keys(validators).reduce(
    (p, key) => validators[key](pp[key]) && p,
    true
  );
}

function correctPassport(p) {
  const keys = Object.keys(p);
  return keys.length === 8 || (keys.length === 7 && keys.indexOf("cid") === -1);
}

const correctCount = input.reduce(
  (p, c) => (p += correctPassport(c) ? 1 : 0),
  0
);
const correctCount2 = input.reduce(
  (p, c) => (p += correctPassport(c) && correctPassport2(c) ? 1 : 0),
  0
);
console.log("Result", correctCount, "and", correctCount2, "of", input.length);
