/*
Input :  
[
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"]
]

[0, 0, 1] ==> Results

Output : "Python"
*/

const tournamentWinner = (competitions, results) => {
  let currentWinnerTeam = "";
  const scores = { [currentWinnerTeam]: 0 };

  for (let i = 0; i < competitions.length; i++) {
    const result = results[i];
    const [homeTeam, awayTeam] = competitions[i];

    const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;

    updatesScores(winningTeam, 3, scores);

    console.log(scores);

    if (scores[winningTeam] > scores[currentWinnerTeam]) {
      currentWinnerTeam = winningTeam;
    }
  }
  return currentWinnerTeam;
};

const HOME_TEAM_WON = 1;

const updatesScores = (team, points, scores) => {
  if (!(team in scores)) {
    scores[team] = 0;
  }
  scores[team] += points;
};

console.log(
  tournamentWinner(
    [
      ["HTML", "C#"],
      ["C#", "Python"],
      ["Python", "HTML"],
    ],
    [0, 0, 1]
  )
);
