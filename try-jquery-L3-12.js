// http://try.jquery.com/levels/3/challenges/12 
// When we click on one of the buttons, it removes all buttons on the page. 
//  Instead, let's just remove the one button that was clicked by using this. 
$(document).ready(function() {
  $('button').on('click', function() {
    var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
    $('.usa').append(message);
    $(this).remove();
  });
});

