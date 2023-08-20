const getQuestionPart = (phrases: string[]): string[] => {
  let strCheck = "";
  let longestMatch = "";
  for (let phrase of phrases) {
    const phraseArr = phrase.split("");

    for (let i = 0; i < phraseArr.length; i++) {
      strCheck += phraseArr[i];

      const isMatch = phrases.every((phrase) => phrase.match(strCheck));
      if (isMatch && longestMatch.length < strCheck.length)
        longestMatch = strCheck;
      if (!isMatch) strCheck = strCheck.substring(1, strCheck.length - 1);
    }
  }

  return phrases.map((phrase) => phrase.replace(longestMatch, ""));
};

console.log(getQuestionPart(["BEFRIEND", "GIRLFRIEND", "FRIENDSHIP"]));
console.log(getQuestionPart(["BATHROOM", "BATH SALTS", "BLOODBATH"]));
