describe("Board", function() {
  beforeEach(function() {
    board = new Board()
  })
  it("the first move is added to player X's list of moves", function() {
    board.claimSquare(1)
    expect(board.playerXMoves).toEqual([1])
  })
  it("the second move is added to player O's list of moves", function() {
    board.claimSquare(1)
    board.claimSquare(4)
    expect(board.playerOMoves).toEqual([4])
  })
})

