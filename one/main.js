const input = [
  1755,
  1668,
  837,
  1900,
  1687,
  1901,
  1765,
  1963,
  1945,
  1791,
  1688,
  1792,
  1865,
  1833,
  1811,
  438,
  1862,
  1851,
  1877,
  1808,
  1253,
  1933,
  1578,
  1841,
  1871,
  1784,
  1567,
  1797,
  1941,
  1747,
  1787,
  1744,
  1450,
  1795,
  1602,
  1972,
  1946,
  1827,
  1950,
  1704,
  547,
  1971,
  1910,
  1502,
  1750,
  1967,
  1656,
  1834,
  1754,
  1446,
  1678,
  1647,
  1695,
  1525,
  1923,
  1488,
  1829,
  1848,
  1766,
  1662,
  1724,
  1897,
  1751,
  1823,
  1540,
  1736,
  1929,
  1772,
  1778,
  1732,
  1948,
  1691,
  1820,
  1788,
  1601,
  1708,
  2005,
  1543,
  1990,
  1666,
  1994,
  1689,
  1980,
  1839,
  2008,
  1801,
  1592,
  1739,
  1845,
  1434,
  360,
  1828,
  1942,
  1713,
  1721,
  1984,
  1966,
  2006,
  1459,
  1944,
  1849,
  1959,
  1740,
  1692,
  1842,
  1999,
  1711,
  1702,
  1777,
  1222,
  1745,
  686,
  1447,
  2002,
  1895,
  1590,
  1498,
  1643,
  1870,
  412,
  73,
  1467,
  1917,
  1438,
  2001,
  1758,
  1810,
  1425,
  1969,
  1884,
  1534,
  1761,
  1512,
  1937,
  1654,
  1796,
  1495,
  1996,
  1473,
  1831,
  1988,
  1469,
  1924,
  1621,
  1403,
  1746,
  1998,
  1858,
  1706,
  1798,
  1978,
  1559,
  1898,
  1815,
  1623,
  1785,
  1753,
  1436,
  608,
  1652,
  1940,
  336,
  1894,
  1454,
  1599,
  1604,
  1975,
  1881,
  1716,
  1878,
  1595,
  1928,
  1550,
  1414,
  1962,
  1607,
  1756,
  1986,
  1775,
  1952,
  1415,
  1864,
  1813,
  650,
  1492,
  1960,
  641,
  1953,
  1873,
  1985,
  1588,
  1680,
  1817,
  1685,
  1723,
  1799,
  1640,
  1479,
  1912,
  1638,
];
input.sort((a, b) => a - b);

function find2020Of2(numbers) {
  for (let i = 0; i < numbers.length; i += 1) {
    for (let j = i + 1; j < numbers.length; j += 1) {
      const vi = numbers[i];
      const vj = numbers[j];
      const sum = vi + vj;
      if (sum === 2020) {
        return [vi, vj];
      } else if (sum > 2020) {
        j = numbers.length;
      }
    }
  }
}

function find2020Of3(numbers) {
  const sums = {};
  for (let i = 0; i < numbers.length; i += 1) {
    for (let j = i + 1; j < numbers.length; j += 1) {
      const sum = numbers[i] + numbers[j];
      if (sum > 2020) {
        j = numbers.length;
      } else {
        sums[sum] = [i, j];
      }
    }
  }

  const sumKeys = Object.keys(sums);
  for (let i = 0; i < sumKeys.length; i += 1) {
    for (let j = 0; j < numbers.length; j += 1) {
      const vi = sumKeys[i];
      const vj = numbers[j];
      const idxs = sums[vi];

      if (idxs.indexOf(j) !== -1) {
        continue;
      }
      const sum = parseInt(vi, 10) + vj;
      if (sum === 2020) {
        return [...idxs.map((x) => numbers[x]), vj];
      } else if (sum > 2020) {
        j = numbers.length;
      }
    }
  }
}

const result2 = find2020Of2(input);
console.log("Result", result2);
console.log(
  "Total",
  result2.reduce((a, b) => a * b, 1)
);

const result3 = find2020Of3(input);
console.log("Result", result3);
if (result3) {
  console.log(
    "Total",
    result3.reduce((a, b) => a * b, 1)
  );
}
