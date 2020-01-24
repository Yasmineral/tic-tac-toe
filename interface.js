$(document).ready(function() {
    let board = new Board()

  $('.col').click(function() {
    $(this).html(board.currentPlayer)
    board.switchPlayers()
  });
  
  $('#restart').click(function() {
    $('.col').empty()
  })
})