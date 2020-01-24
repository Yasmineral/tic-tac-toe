$(document).ready(function() {
    
  $('.col').click(function() {
    $(this).html('X')
  });
  
  $('#restart').click(function() {
    $('.col').empty()
  })
})