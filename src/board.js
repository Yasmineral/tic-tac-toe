class Board {
  constructor() {
    this.player = "X"
    this.moves = 
    [0, 0, 0,
     0, 0, 0,
     0, 0, 0 ]
  }

  claimSquare(square) {
    this.moves[square] = (this.player)
    this.switchPlayers()
  }



  switchPlayers() {
    if (this.player === "X") {
      return this.player = "O"
    } else if (this.player === "O") {
      return this.player = "X"
    }
  }

  
}


