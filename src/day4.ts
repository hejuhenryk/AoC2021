fetch("../dist/inputs/input4.txt")
  .then((res) => res.text())
  .then((res) => res.split("\n"))
  .then((res) => readDocs(res))
  .then((res) => console.log(countValidPass2(res)));

const readDocs = (docs: string[]) => {
  const unSortedDocs: { [k: string]: string }[] = [];
  let doc: { [k: string]: string } = {};
  docs.forEach((d) => {
    if (d.length > 2) {
      d.split(" ").forEach((info) => {
        const [key, value] = info.split(":");
        doc[key] = value;
      });
    } else {
      unSortedDocs.push({ ...doc });
      doc = {};
    }
  });

  unSortedDocs.push({ ...doc });
  return unSortedDocs;
};

const countValidPass = (unsortedDocs: { [k: string]: string }[]) => {
  return unsortedDocs.filter(
    (d) => d.byr && d.iyr && d.eyr && d.hgt && d.hcl && d.ecl && d.pid
  ).length;
};
const countValidPass2 = (unsortedDocs: { [k: string]: string }[]) => {
  const byrV = (v: string) => +v >= 1920 && +v <= 2002;
  const iyrV = (v: string) => +v >= 2010 && +v <= 2020;
  const eyrV = (v: string) => +v >= 2020 && +v <= 2030;
  const hgtV = (v: string) => {
    v = v.trim();
    const isTrue =
      v.slice(-2, v.length) === "cm"
        ? +v.slice(0, -2) >= 150 && +v.slice(0, -2) <= 193
        : v.slice(-2, v.length) === "in"
        ? +v.slice(0, -2) >= 59 && +v.slice(0, -2) <= 76
        : false;
    return isTrue;
  };
  const hclV = (v: string) => /^#[0-9a-fA-F]{6}$/g.test(v.trim());
  const eclV = (v: string) =>
    ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(v.trim());
  const pidV = (v: string) => /^\d{9}$/g.test(v.trim());
  return unsortedDocs.filter((d) => {
    if (d.pid && !pidV(d.pid)) console.log(d.pid, "-");
    return (
      d.byr &&
      d.iyr &&
      d.eyr &&
      d.hgt &&
      d.hcl &&
      d.ecl &&
      d.pid &&
      byrV(d.byr) &&
      iyrV(d.iyr) &&
      eyrV(d.eyr) &&
      hgtV(d.hgt) &&
      hclV(d.hcl) &&
      eclV(d.ecl) &&
      pidV(d.pid)
    );
  }).length;
};
