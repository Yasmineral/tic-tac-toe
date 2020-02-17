$(document).ready(function() {
    let board = new Board()

  $('.col').click(function() {
    $(this).html(board.player)
    square = $(this).data('num')
    board.switchPlayers()
  });
  
  $('#restart').click(function() {
    $('.col').empty()
  })
  
})