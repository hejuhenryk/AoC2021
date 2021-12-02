import { appendResault, transformInputToArrayOfTuples } from "./utils.js";


// const day2part1 = (input: ['forward' | 'down' | 'up', number][]): number => {
//   const position = {
//     forward: 0,
//     depth: 0
//   }
//   input.forEach(dir => dir[0] === 'forward' ? position.forward += dir[1] : dir[0] === "down" ? position.depth += dir[1] : position.depth -= dir[1])
//   return position.forward * position.depth;
// }
const day2part1 = (input: ['forward' | 'down' | 'up', number][]): number => {
  const position = {
    forward: 0,
    depth: 0
  }
  input.forEach(dir => dir[0] === 'forward' ? position.forward += dir[1] : dir[0] === "down" ? position.depth += dir[1] : position.depth -= dir[1])
  return position.forward * position.depth;
}
const day2part2 = (input: ['forward' | 'down' | 'up', number][]): number => {
  const position = {
    horisontal: 0,
    depth: 0,
    aim: 0
  }
  input.forEach(dir => {
    if (dir[0] === "down") {
      position.aim += dir[1];
    } else if (dir[0] === "up") {
      position.aim -= dir[1]
    } else {
      position.horisontal += dir[1]
      position.depth += dir[1] * position.aim
    }
  })
  return position.horisontal * position.depth;
}


fetch("../dist/inputs/input2.txt")
  .then((res) => res.text())
  .then((res) => transformInputToArrayOfTuples(res))
  .then((res) => {
    console.log(`res`, res)
    appendResault(day2part1(res), 2, 1)
    return res
  })
  .then((res) => {
    appendResault(day2part2(res), 2, 2)
  })

