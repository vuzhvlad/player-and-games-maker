const team = {
    _players: [
      {firstName: 'Vlad' , lastName: 'Vuzh' , age: 18},
      {firstName: 'Emma', lastName: 'Maanen' , age: 18},
      {firstName: 'Trafim', lastName: 'Brokh', age: 18}
    ],
    _games: [
      {opponent: 'Chealse', teamPoints: 2, opponentPoints: 2},
      {opponent: 'Barca', teamPoints: 3, opponentPoints: 2},
      {opponent: 'Real', teamPoints: 0, opponentPoints: 2}
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      };
      this._players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
      this._games.push(game);
    }
  
  };
  
  team.addGame('Titans', 100, 98);
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team);