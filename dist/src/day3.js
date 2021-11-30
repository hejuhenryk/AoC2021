"use strict";
fetch("../dist/inputs/input3.txt")
    .then((res) => res.text())
    .then((res) => res.split("\n").map((line) => line.split("").slice(0, -1)))
    .then((res) => trySlopes(res, [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2],
]))
    .then((res) => console.log(res.reduce((prev, cur) => (cur = prev * cur), 1)));
const moveTrueForest = (forest, step) => {
    let trees = 0;
    let tobogganPos = [0, 0];
    const path = [];
    const length = forest[0].length;
    const height = forest.length;
    const moveTo = (position, move) => [
        position[0] + move[0],
        position[1] + move[1],
    ];
    while (tobogganPos[1] < height - 1) {
        tobogganPos = moveTo(tobogganPos, step);
        if (forest[tobogganPos[1]][tobogganPos[0] % length] === "#")
            trees++;
    }
    return trees;
};
const trySlopes = (forest, slopes) => slopes.map((s) => moveTrueForest(forest, s));
//# sourceMappingURL=day3.js.map