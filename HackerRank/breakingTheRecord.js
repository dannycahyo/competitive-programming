function breakingRecords(scores) {
  let mostScore = scores[0];
  let worstScore = scores[0];

  let breakScore = 0;
  let leastScore = 0;

  for (let i = 0; i < scores.length; i++) {
    let currentScore = scores[i];

    if (currentScore > mostScore) {
      //   console.log(mostScore);
      mostScore = currentScore;
      breakScore++;
    } else if (currentScore < worstScore) {
      //   console.log(worstScore);
      worstScore = currentScore;
      leastScore++;
    }
  }
  return [breakScore, leastScore];
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
