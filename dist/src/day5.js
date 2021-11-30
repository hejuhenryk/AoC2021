"use strict";
fetch("../dist/inputs/input5.txt")
    .then((res) => res.text())
    .then((res) => res.split("\n"))
    .then((res) => res.map((code) => readCode(code)))
    // part B
    .then((res) => res.sort((a, b) => a - b))
    .then((res) => res.find((v, i, a) => v + 2 === a[i + 2]))
    .then((res) => (res ? res + 1 : -1))
    .then((res) => console.log(res));
// part A
//   .then((res) => res.reduce((pre, cur) => (pre > cur ? pre : cur), 0))
//   .then((res) => console.log(res));
const readCode = (code) => {
    const row = code.slice(0, 7);
    const colum = code.slice(-3);
    // return seat id
    return (parseInt(row.replace(/[B]/g, "1").replace(/[F]/g, "0"), 2) * 8 +
        parseInt(colum.replace(/[L]/g, "0").replace(/[R]/g, "1"), 2));
};
//# sourceMappingURL=day5.js.map