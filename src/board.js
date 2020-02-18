class Board {
  constructor() {
    this.player = "X"
    this.moves = [
      0, 0, 0,
      0, 0, 0,
      0, 0, 0 
    ]
    this.winningMoves = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
  };

  claimSquare(square) {
    this.moves[square] = (this.player)
    this.switchPlayers()
  };

  switchPlayers() {
    if (this.player === "X") {
      return this.player = "O"
    } else if (this.player === "O") {
      return this.player = "X"
    }
  };

  checkForWinner() {
    if(this.moves[0] && this.moves[1] && this.moves[2] === this.player ||
      this.moves[3] && this.moves[4] && this.moves[5] === this.player ||
      this.moves[6] && this.moves[7] && this.moves[8] === this.player ||
      this.moves[0] && this.moves[3] && this.moves[6] === this.player ||
      this.moves[1] && this.moves[4] && this.moves[7] === this.player ||
      this.moves[2] && this.moves[5] && this.moves[8] === this.player) {
      return true
    } else {
      return false
    }
  };
}
