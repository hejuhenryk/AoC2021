fetch("../dist/inputs/input4.txt")
  .then((res) => res.text())
  .then((res) => res.split("\n"))
  .then((res) => console.log(res));
