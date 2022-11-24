const HOME_TEAM_WON = 1;

const competitions = [
  ["PHP", "Ruby"],
  ["PHP", "Reason"],
  ["Reason", "Ruby"],
];

const results = [0, 0, 1];

function tournamentWinner(competitions, results) {
  let currentWinnerTeam = "";
  const scores = { [currentWinnerTeam]: 0 };

  for (let i = 0; i < competitions.length; i++) {
    const result = results[i];
    const [homeTeam, awayTeam] = competitions[i];

    const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;

    updatesScores(winningTeam, 3, scores);

    if (scores[winningTeam] > scores[currentWinnerTeam]) {
      currentWinnerTeam = winningTeam;
    }
  }
  return currentWinnerTeam;
}

const updatesScores = (team, points, scores) => {
  if (!(team in scores)) scores[team] = 0;

  scores[team] += points;
};

finalResults = tournamentWinner(competitions, results);

console.log();
