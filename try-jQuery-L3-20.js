// <!-- usage of jQuery as in  http://try.jquery.com/levels/3/challenges/20  --> 
//  There is a small problem with the way our on() handler is being used. 
//  Currently, it is targeting all of the <button> elements on the screen. Refactor the 
//  on() handler to only target <button> elements within a 
//  .tour by using the selector argument of the on() method.
//    some result filtering options to our page. We want to be able to click on a filter and 
//    highlight the corresponding tours with a .highlight class. Go ahead and get started by 
//    creating the click handler for the .on-sale filter from the #filters list. 
//    Don't worry about the contents of the click handler function, 
//    we'll get it working in the next few challenges.

//Create the click handler here
$(document).ready(function() {
	$('#filters').on('click', '.on-sale', function() {
  // find all vacations that are on-sale
  // add a class to these vacations
  $('.book').filter('.on-sale');
	});
});

// remainings of part #19 
$(document).ready(function() {
  $('li').on('click', 'button', function() {
    var tour = $(this).closest('.tour');
    var discount = tour.data('discount');
    var message = $('<span>Call 1-555-jquery-air for a $' + discount + ' discount.</span>');
    tour.append(message);
    $(this).remove();
  });
});
