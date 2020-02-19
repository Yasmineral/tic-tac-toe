describe("Board", function() {
  beforeEach(function() {
    board = new Board()
  })
  it("the first move belongs to player X", () => {
    expect(board.player).toEqual("X")
  })
  describe("#switchPlayers", () => {
    it("the second move is attributed to player O", () => {
      board.switchPlayers()
      expect(board.player).toEqual("O")
    })
  });
  describe("#claimSquare", () => {
    it("marks the current player's move within the game", () => {
      board.claimSquare(0)
      expect(board.moves[0]).toEqual("X")
    })
  });
  describe("#checkForWinner", () => {
    it("returns false if there are no winning moves", () => {
      board.moves = [0, 0, 0, 0, 0, 0, 0, 0, 0 ]
      expect(board.checkForWinner()).toEqual(false)
    })
    it("returns true if there is a top horizontal winning move", () => {
      board.moves = ["X", "X", "X", 0, 0, 0, 0, 0, 0 ]
      expect(board.checkForWinner()).toEqual(true)
    })
    it("returns true if there is a middle horizontal winning move", () => {
      board.moves = [0, 0, 0, "X", "X", "X", 0, 0, 0 ]
      expect(board.checkForWinner()).toEqual(true)
    })
    it("returns true if there is a bottom horizontal winning move", () => {
      board.moves = [0, 0, 0, 0, 0, 0, "X", "X", "X" ]
      expect(board.checkForWinner()).toEqual(true)
    })
    it("returns true if there is a left verticle winning move", () => {
      board.moves = ["X", 0, 0, "X", 0, 0, "X", 0, 0 ]
      expect(board.checkForWinner()).toEqual(true)
    })
    it("returns true if there is a middle verticle winning move", () => {
      board.moves = [0, "X", 0, 0, "X", 0, 0, "X", 0 ]
      expect(board.checkForWinner()).toEqual(true)
    })
    it("returns true if there is a right verticle winning move", () => {
      board.moves = [0, 0, "X", 0, 0, "X", 0, 0, "X" ]
      expect(board.checkForWinner()).toEqual(true)
    })
    it("returns true if there is a left diagonal winning move", () => {
      board.moves = ["X", 0, 0, 0, "X", 0, 0, 0, "X" ]
      expect(board.checkForWinner()).toEqual(true)
    })
    it("returns true if there is a right diagonal winning move", () => {
      board.moves = [0, 0, "X", 0, "X", 0, "X", 0, 0 ]
      expect(board.checkForWinner()).toEqual(true)
    })
    it("returns false if a winning combination has a mixture of X and O moves", () => {
      board.moves = [0, 0, "X", 0, "O", 0, "X", 0, 0 ]
      expect(board.checkForWinner()).toEqual(false)
    })
  });
})

