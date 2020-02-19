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
  };

  switchPlayers() {
    if (this.player === "X") {
      return this.player = "O"
    } else if (this.player === "O") {
      return this.player = "X"
    }
  };

  checkForWinner() {
    let plays = this.moves.reduce((accumulator, element, index) => 
    (element === this.player) ? accumulator.concat(index) : accumulator, [])
    let gameWon = false;
    for(let array of this.winningMoves) {
      if(array.every(num => plays.indexOf(num) > -1)) {
        gameWon = true
        break;
      }
    }
    return gameWon
  }
}
          
      
  
       

// cycle through each array within winningMoves
// if EVERY number in the array can be found within the 'plays' array, return true
// else false

