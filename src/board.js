class Board {
  constructor() {
    this.playerXMoves = []
    this.playerOMoves = []
    this.currentPlayer = 'X'
  }

  claimSquare(squareNumber) {
    if (this.currentPlayer === 'X') {
      this.playerXMoves.push(squareNumber)
    } else {
      this.playerOMoves.push(squareNumber)
    }
    this.switchPlayers()  
  }

  switchPlayers() {
    if (this.currentPlayer === 'X') {
      this.currentPlayer = 'O'
    } else {
      this.currentPlayer = 'X'
    }
  }
}

