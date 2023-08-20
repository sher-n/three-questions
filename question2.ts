const getClockAngle = (hh_mm: string): number => {
  // return the shorter angle between the hour and minute hands of the clock, in degrehour= Number(hh_mm.split(':')[0])
  let hour = Number(hh_mm.split(":")[0]);
  hour = hour >= 12 ? hour - 12 : hour;
  let min = Number(hh_mm.split(":")[1]);

  const minDegree = min * 6;
  const hourDegree = hour * 30 + min / 2;
  console.log({ minDegree, hourDegree });
  let result =
    hour > 6 && hour <= 12
      ? 360 - hourDegree - minDegree
      : hourDegree - minDegree;
  return Math.abs(result);
};

console.log(getClockAngle("14:15"));
console.log(getClockAngle("17:30"));
