const getHandScore = (input: string) => {
  const cards = input.split(" ");
  let result: { [index: string]: number } = {};
  let resultCount: { [score: string]: number } = {};
  let max = 0;
  for (let card of cards) {
    //H C D S
    const cardType = card[0];

    //A 2 3 4 5 ...J Q K
    const rank = card.replace(cardType, "");

    result[cardType] = result[cardType] || 0;

    const score = !Number.isNaN(Number(rank))
      ? Number(rank)
      : ["J", "Q", "K"].includes(rank)
      ? 10
      : 11;

    result[cardType] += score;

    max = Math.max(max, result[cardType]);

    resultCount[rank] = resultCount[rank] ? resultCount[rank] : 0;

    resultCount[rank] += 1;

    ///trips
    if (score == 10 && resultCount[rank] == 3) max = Math.max(max, 32.5);
    //AAA
    if (score == 11 && resultCount[rank] == 3) max = Math.max(max, 35);

    console.log({ score: result[cardType], resultCount });
  }

  return max;
};

console.log(getHandScore("HA SA CA"));
console.log(getHandScore("H10 S10 C10"));
console.log(getHandScore("S8 S10 CA"));
