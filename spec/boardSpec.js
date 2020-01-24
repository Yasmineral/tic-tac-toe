describe("Board", function() {
  it("a claimed square is added to the players list of moves", function() {
    let board = new Board()
    board.claimSquare(1)
    expect(board.playerXMoves).toEqual([1])
  })
})

