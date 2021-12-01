export const transformInputToArrayOfNumbers = (input: string): number[] => input.split("\n").map(e => +e)
export const appendResault = (res: string | number, day: number, part: 1 | 2): void => {
    const list = document.getElementById("resaults")
    let p = document.createElement("p")
    p.textContent = `Day ${day} - part ${part}: ${res}`
    if (list) list.appendChild(p)
}