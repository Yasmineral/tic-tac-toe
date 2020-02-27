$(document).ready(function() {
  const allSquares = document.querySelectorAll('.col')
  let board = new Board()

  $('.col').click(function(e) {
    colNum = e.target.dataset.num
    $(this).html(board.player)
    square = $(this).data('num')
    board.claimSquare(square)
    winner()
    board.switchPlayers()
  });

  
  $('#restart').click(function() {
    $('.col').empty()
    $('#winner').empty()
    $('.col').removeClass('already-played')
  });

  function winner() {
    if (board.checkForWinner()) {
      $('#winner').text(board.player + " is the winner!")
      $('.col').addClass('already-played')
     reset()
    }
  };

  function reset() {
    board.moves = [0, 0, 0, 0, 0, 0, 0, 0, 0 ]
  }
});