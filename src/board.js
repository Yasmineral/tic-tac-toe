class Board {
  constructor() {
    this.playerXMoves = []
  }

  claimSquare(squareNumber) {
    this.playerXMoves.push(squareNumber)
  }
}
