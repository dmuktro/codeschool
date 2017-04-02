// http://try.jquery.com/levels/3/challenges/12 
//  http://try.jquery.com/levels/3/challenges/13 
//   http://try.jquery.com/levels/3/challenges/14
// When we click on one of the buttons, it removes all buttons on the page. 
// Instead, let's just remove the one button that was clicked by using this. 
//  ..we're no longer appending the message in the right place. We really only want this message to be added 
//  after() the button we click on. Instead of appending the message to the .usa list, 
//  add it after() the button that was clicked.  
//   It looks like someone changed our HTML. Now the <button> is inside a <div> tag. 
// We don't want the message to go inside the <div> tag though, we want 
// it to go at the bottom of the <li> element. Instead of using after(), 
// let's change our code to find the closest() .tour element and append() the message to the bottom of it.
$(document).ready(function() {
  $('button').on('click', function() {
    var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
    $(this).after(message);
    $(this).remove();
  });
});
