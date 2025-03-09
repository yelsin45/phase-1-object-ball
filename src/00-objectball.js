function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}
function numPointsScored(playerName) {
  let game = gameObject();
  for (let team in game) {
    if (game[team].players[playerName]) {
      return game[team].players[playerName].points;
    }
  }
}
function shoeSize(playerName) {
  let game = gameObject();
  for (let team in game) {
    if (game[team].players[playerName]) {
      return game[team].players[playerName].shoe;
    }
  }
}
function teamColors(teamName) {
  let game = gameObject();
  for (let team in game) {
    if (game[team].teamName === teamName) {
      return game[team].colors;
    }
  }
}
function teamNames() {
  let game = gameObject();
  return [game.home.teamName, game.away.teamName];
}
function playerNumbers(teamName) {
  let game = gameObject();
  for (let team in game) {
    if (game[team].teamName === teamName) {
      return Object.values(game[team].players).map((player) => player.number);
    }
  }
}
function playerStats(playerName) {
  let game = gameObject();
  for (let team in game) {
    if (game[team].players[playerName]) {
      return game[team].players[playerName];
    }
  }
}
function bigShoeRebounds() {
  let game = gameObject();
  let playerWithLargestShoe = { shoe: 0 };
  for (let team in game) {
    let players = Object.values(game[team].players);
    players.forEach((player) => {
      if (player.shoe > playerWithLargestShoe.shoe) {
        playerWithLargestShoe = player;
      }
    });
  }
  return playerWithLargestShoe.rebounds;
}
function mostPointsScored() {
  let game = gameObject();
  let playerWithMostPoints = { points: 0 };
  for (let team in game) {
    let players = Object.values(game[team].players);
    players.forEach((player) => {
      if (player.points > playerWithMostPoints.points) {
        playerWithMostPoints = player;
      }
    });
  }
  return playerWithMostPoints.points;
}
function winningTeam() {
  let game = gameObject();
  let homePoints = Object.values(game.home.players).reduce(
    (acc, player) => acc + player.points,
    0
  );
  let awayPoints = Object.values(game.away.players).reduce(
    (acc, player) => acc + player.points,
    0
  );
  return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
}
function playerWithLongestName() {
  let game = gameObject();
  let playerWithLongestName = "";
  for (let team in game) {
    let players = Object.keys(game[team].players);
    players.forEach((player) => {
      if (player.length > playerWithLongestName.length) {
        playerWithLongestName = player;
      }
    });
  }
  return playerWithLongestName;
}
function doesLongNameStealATon() {
  let game = gameObject();
  let playerWithMostSteals = { steals: 0 };
  for (let team in game) {
    let players = Object.values(game[team].players);
    players.forEach((player) => {
      if (player.steals > playerWithMostSteals.steals) {
        playerWithMostSteals = player;
      }
    });
  }
  return playerWithMostSteals.steals > 3;
}
