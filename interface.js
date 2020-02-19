$(document).ready(function() {
  const allSquares = document.querySelectorAll('.col')
  let board = new Board()

  $('.col').click(function() {
    $(this).html(board.player)
    square = $(this).data('num')
    board.claimSquare(square)
    winner()
    board.switchPlayers()
  });
  
  $('#restart').click(function() {
    $('.col').empty()
    $('#winner').empty()
  });

  function winner() {
    if (board.checkForWinner()) {
      console.log(board.moves)
      $('#winner').text(board.player + " is the winner!")
     reset()
     console.log(board.moves)
    }
  };

  function reset() {
    board.moves = [0, 0, 0, 0, 0, 0, 0, 0, 0 ]
  }
});