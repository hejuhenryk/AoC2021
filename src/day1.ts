fetch("../dist/inputs/input1.txt")
  .then((res) => res.text())
  .then((res) => console.log(sumThreeTo2020(res.split("\n").map((n) => +n))));

const sumTwoTo2020 = (data: number[]) => {
  let startIndx = 0;
  let endIndx = data.length - 1;
  const getSum = () => data[startIndx] + data[endIndx];
  data.sort((a, b) => a - b);
  while (getSum() !== 2020 && startIndx < endIndx) {
    if (getSum() < 2020) startIndx++;
    else if (getSum() > 2020) endIndx--;
  }
  return getSum() === 2020 ? data[startIndx] * data[endIndx] : undefined;
};

const sumThreeTo2020 = (data: number[]) => {
  let resaut: undefined | number = undefined;
  data = data.sort((a, b) => a - b);
  console.log(data);
  const restDict: { [k: number]: number } = {};
  data.forEach((x) => {
    data.forEach((y) => (restDict[x + y] = x * y));
  });
  data.forEach((x) => {
    if (restDict[2020 - x]) resaut = x * restDict[2020 - x];
  });
  return resaut;
};
