import { appendResault, transformInputToArrayOfNumbers } from "./utils.js";
const day1part1 = (input) => input.reduce((acc, curr, indx, arr) => {
    if (indx > 0) {
        return curr > arr[indx - 1] ? ++acc : acc;
    }
    else
        return 0;
}, 0);
const day1part2 = (input) => input.reduce((acc, curr, indx, arr) => {
    if (indx > 2) {
        return arr[indx] + arr[indx - 1] + arr[indx - 2] > arr[indx - 1] + +arr[indx - 2] + arr[indx - 3] ? ++acc : acc;
    }
    else
        return 0;
}, 0);
fetch("../dist/inputs/input1.txt")
    .then((res) => res.text())
    .then((res) => transformInputToArrayOfNumbers(res))
    .then((res) => {
    appendResault(day1part1(res), 1, 1);
    return res;
})
    .then((res) => {
    appendResault(day1part2(res), 1, 2);
});
//# sourceMappingURL=day1%20copy.js.map