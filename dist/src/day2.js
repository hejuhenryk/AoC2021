"use strict";
fetch("../dist/inputs/input2.txt")
    .then((res) => res.text())
    .then((res) => res.split("\n"))
    .then((res) => res.filter(filterFunPartB))
    .then((res) => console.log(res.length));
const includsLetter = (password, letter) => password.split("").filter((l) => l === letter).length;
const filterFunPartA = (input) => {
    const [range, letter, pass] = input.split(" ");
    const [min, max] = range.split("-").map((r) => +r);
    const numOfLett = includsLetter(pass, letter.slice(0, -1));
    return numOfLett >= min && numOfLett <= max;
};
const hasLetterOnPosition = (pass, letter, pos) => {
    return pass[pos - 1] === letter;
};
const filterFunPartB = (input) => {
    let [positions, letter, pass] = input.split(" ");
    const [posA, posB] = positions.split("-").map((r) => +r);
    letter = letter.slice(0, -1);
    return ((hasLetterOnPosition(pass, letter, posA) &&
        !hasLetterOnPosition(pass, letter, posB)) ||
        (!hasLetterOnPosition(pass, letter, posA) &&
            hasLetterOnPosition(pass, letter, posB)));
};
//# sourceMappingURL=day2.js.map