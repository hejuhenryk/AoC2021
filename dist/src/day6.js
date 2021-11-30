"use strict";
fetch("../dist/inputs/input6.txt")
    .then((res) => res.text())
    .then((res) => res.split("\n"))
    .then((res) => group(res))
    .then((res) => console.log(res.reduce((p, c) => c + p, 0)));
const group = (answers) => {
    let yes = {
        persInGroup: 0,
    };
    const numYes = [];
    answers.forEach((line) => {
        line = line.trim();
        if (/^\s*$/.test(line)) {
            let num = 0;
            Object.keys(yes).forEach((k) => {
                if (k !== "persInGroup") {
                    if (yes[k] === yes.persInGroup)
                        num++;
                }
            });
            numYes.push(num);
            yes = { persInGroup: 0 };
        }
        else if (line) {
            yes.persInGroup++;
            line.split("").forEach((letter) => {
                if (yes[letter])
                    yes[letter]++;
                else
                    yes[letter] = 1;
            });
        }
    });
    let num = 0;
    Object.keys(yes).forEach((k) => {
        if (k !== "persInGroup") {
            if (yes[k] === yes.persInGroup)
                num++;
        }
    });
    numYes.push(num);
    return numYes;
};
//# sourceMappingURL=day6.js.map