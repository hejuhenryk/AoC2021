export const transformInputToArrayOfNumbers = (input: string): number[] => input.split("\n").map(e => +e)
export const transformInputToArrayOfTuples = (input: string): ['forward' | 'down' | 'up', number][] => input.split("\n").map(e => {
    const [direction, distance] = e.split(" ")
    return [direction as 'forward' | 'down' | 'up', +distance]
})
export const appendResault = (res: string | number, day: number, part: 1 | 2): void => {
    const list = document.getElementById("resaults")
    let p = document.createElement("p")
    p.textContent = `Day ${day} - part ${part}: ${res}`
    if (list) list.appendChild(p)
}