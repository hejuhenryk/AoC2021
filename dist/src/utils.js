export const transformInputToArrayOfNumbers = (input) => input.split("\n").map(e => +e);
export const transformInputToArrayOfTuples = (input) => input.split("\n").map(e => {
    const [direction, distance] = e.split(" ");
    return [direction, +distance];
});
export const appendResault = (res, day, part) => {
    const list = document.getElementById("resaults");
    let p = document.createElement("p");
    p.textContent = `Day ${day} - part ${part}: ${res}`;
    if (list)
        list.appendChild(p);
};
//# sourceMappingURL=utils.js.map