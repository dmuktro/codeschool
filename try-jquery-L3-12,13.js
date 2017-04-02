// http://try.jquery.com/levels/3/challenges/12 
//  http://try.jquery.com/levels/3/challenges/13 
// When we click on one of the buttons, it removes all buttons on the page. 
// Instead, let's just remove the one button that was clicked by using this. 
//  ..we're no longer appending the message in the right place. We really only want this message to be added 
//  after() the button we click on. Instead of appending the message to the .usa list, 
//  add it after() the button that was clicked.  
$(document).ready(function() {
  $('button').on('click', function() {
    var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
    $(this).after(message);
    $(this).remove();
  });
});
