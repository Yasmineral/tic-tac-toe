describe("Board", function() {
  beforeEach(function() {
    board = new Board()
  })
  it("the first move belongs to player X", () => {
    expect(board.player).toEqual("X")
  })
  describe("#switchPlayers", () => {
    it("the second move is attributed to player O", () => {
      board.claimSquare(0)
      expect(board.player).toEqual("O")
    })
  })
  describe("#claimSquare", () => {
    it("marks the current player's move within the game", () => {
      board.claimSquare(0)
      expect(board.moves[0]).toEqual("X")
    })
  })
})

